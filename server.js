var fs = require('fs');
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
var express = require('express'),
    app = express(),
    https = require('https').createServer(options, app),
    io = require('socket.io')(https),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combined'));

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

app.use('/', express.static(__dirname + '/dist'));
app.get(/^\/(?!api)/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.use(/^\/api/, (req, res) => {
    request({
        url: config.mongodbUrl + req.url.replace('/api', ''),
        method: req.method,
        headers: req.headers,
        body: req.body,
        json: true,
        agentOptions: {
            rejectUnauthorized: false
        }
    }).pipe(res);
});

//socketio logic
request({
    url: config.mongodbUrl + '/login/getNsps',
    method: 'GET',
    agentOptions: {
        rejectUnauthorized: false
    },
    json: true
}, (err, res, body) => {
    if(err) throw err;
    console.log(body.results);
    for(var i=0; i<body.results.length; i++) {
        var nsp = io.of('/' + body.results[i]);
        nsp.on('connection', (socket) => {
            console.log('socketio:', socket.username, socket.nsp.name);
            console.log('============================================================');
            //timeout socket if not authenticated within 60 seconds
            var noAuthTimeout = setTimeout(() => {
                socket.emit('message', 'connection timed out....no creds provided...');
                console.log(socket.username, ' timed out....no creds provided...');
                socket.disconnect();
            }, 60000);

            socket.on('auth', (token) => {
                console.log('got jwt:', token);
                jwt.verify(token, config.secret, (err, decoded) => {
                    if(err) {
                        socket.emit('auth', {code: 400, message: 'illegal JWT...aborting'});
                        socket.disconnect();
                        return;
                    }
                    if(socket.nsp.name == '/' + decoded.nsp) {
                        clearTimeout(noAuthTimeout);
                        socket.username = decoded.username;
                        socket.emit('auth', {code: 200, message: 'authenticated successfully...'});
                        socket.leave(socket.id);
                        console.log('all rooms for ', socket.nsp.name, io.nsps[socket.nsp.name].adapter.room);
                        socket.emit('all-rooms', Object.keys(io.nsps[socket.nsp.name].adapter.rooms));

                        ['message', 'resize', 'connect-back', 'tty', 'chat'].forEach((val) => {
                            socket.on(val, (message) => {
                                if(socket.room != null) socket.to(socket.room).emit(val, {sender: socket.username, message: message});
                            });
                        });

                        socket.on('join', (room) => {
                            console.log(socket.username, 'joining room', room);
                            if(room.replace(/\s/g, '') != '') {
                                socket.room = room;
                                socket.join(room);
                                socket.to(socket.room).emit('joined', socket.username);
                                io.nsps[socket.nsp.name].emit('all-rooms', Object.keys(io.nsps[socket.nsp.name].adapter.rooms));
                            }
                        });

                        socket.on('leave', (room) => {
                            console.log(socket.username, 'leaving room', room);
                            if(socket.room == room) {
                                socket.room = null;
                                socket.leave(room);
                                socket.to(socket.room).emit('left', socket.username);
                                io.nsps[socket.nsp.name].emit('all-rooms', Object.keys(io.nsps[socket.nsp.name].adapter.rooms));
                            }
                        });

                    } else {
                        socket.emit('auth', {code: 500, message: 'unauthorized access to nsp...aborting'});
                        socket.disconnect();
                    }
                });
            });

            socket.on('disconnect', () => {
                socket.to(socket.room).emit('left', socket.username);
                io.nsps[socket.nsp.name].emit('all-rooms', Object.keys(io.nsps[socket.nsp.name].adapter.rooms));
            });
        });
    }

    https.listen(8082, () => {
        console.log('server running on port 8082...');
    });
});
