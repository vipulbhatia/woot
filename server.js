var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Mongod = require('./mongod.js'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    mongodb = Mongod('mongodb://165.136.136.13:27017/monitoring', 'findhost'),
    exchange = require('../exchange.IO');

mongodb.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/public/css'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get(/^\/(?!api|app)/, function(req, res) {
    console.log('non api url called...serving index');
    res.render('index');
});

app.get('/app/:page', function(req, res) {
    res.render(req.params.page);
});

app.post('/api/login', mongodb.login);

app.use(function(req, res, next) {
    var token = req.body.token || req.params.token || req.query.token;
    console.log('got jwt token:', token);
    if(token) {
            jwt.verify(token, config.secret, function(err, decoded) {
                if(err) {
                    return res.status(403).json({err: 'illegal jwt'});
                } else {
                    next();
                }
            })
    } else {
        return res.status(403).json({err: 'no jwt found'});
    }
});

app.post('/api/checkEmail', mongodb.checkEmail);
app.get('/api/getaccounts', mongodb.getAccounts);
app.get('/api/search', mongodb.search);
app.get('/api/getmonitoringdata', mongodb.getMonitoringData);
app.get('/api/getRsms', mongodb.getRsms);

app.listen(8002, function() {
    console.log('server running on port 8002...');
});

exchange.httpServer.listen(8000, function() {
    console.log('exchange http server running on 8000...');
});

exchange.tcpServer.listen(8001, function() {
    console.log('exchange tcp server running on 8001...');
});
