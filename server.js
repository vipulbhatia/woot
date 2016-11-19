var express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io')(http),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(morgan('combined'));

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get(/^\/(?!api|app)/, function(req, res) {
    //console.log('non api url called...serving index');
    res.render('index');
});

app.get('/app/:page', function(req, res) {
    res.render(req.params.page);
});

app.post('/api/login', function(req, res) {
    res.json({status: 200, nsp: 'admin', username: 'admin', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJhZG1pbiIsIm5zcCI6ImFkbWluIn0.CjVLTOLcEOL8ltb13-SjWgt48GYvdOuMvRjRqHgybCo'});
});

//socketio logic
request({
    url: config.mongodbUrl + '/login/getNsps',
    method: 'GET',
    json: true
    }, function(err, res, body) {
    if(err) throw err;
    console.log(body.results);
    for(var i=0; i<body.results.length; i++) {
        var nsp = io.of(body.results[i]);
        nsp.on('connection', function(socket) {
            console.log('socketio:', socket.username, socket.nsp.name);
            console.log('============================================================');
            //timeout socket if not authenticated within 60 seconds
            var noAuthTimeout = setTimeout(function() {
                socket.emit('message', 'connection timed out....no creds provided...');
                console.log(socket.username, ' timed out....no creds provided...');
                socket.disconnect();
            }, 60000);

            socket.on('auth', function(token) {
                console.log('got jwt:', token);
                jwt.verify(token, config.secret, function(err, decoded) {
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
                        socket.emit('all-rooms', Object.keys(nsp.adapter.rooms));

                        ['message', 'resize', 'connect-back', 'tty', 'chat'].forEach(function(val) {
                            socket.on(val, function(message) {
                                if(socket.room != null) socket.to(socket.room).emit(val, {sender: socket.username, message: message});
                            });
                        });

                        socket.on('join', function(room) {
                            console.log(socket.username, 'joining room', room);
                            if(room.replace(/\s/g, '') != '') {
                                socket.room = room;
                                socket.join(room);
                                socket.to(socket.room).emit('joined', socket.username);
                                nsp.emit('all-rooms', Object.keys(nsp.adapter.rooms));
                            }
                        });

                        socket.on('leave', function(room) {
                            console.log(socket.username, 'leaving room', room);
                            if(socket.room == room) {
                                socket.room = null;
                                socket.leave(room);
                                socket.to(socket.room).emit('left', socket.username);
                                nsp.emit('all-rooms', Object.keys(nsp.adapter.rooms));
                            }
                        });

                    } else {
                        socket.emit('auth', {code: 500, message: 'unauthorized access to nsp...aborting'});
                        socket.disconnect();
                    }
                });
            });

            socket.on('disconnect', function() {
                socket.to(socket.room).emit('left', socket.username);
            });
        });
    }

    http.listen(8082, function() {
        console.log('server running on port 8082...');
    });
});
