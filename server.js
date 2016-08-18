var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Mongod = require('./mongod.js'),
    mongodb = Mongod('mongodb://localhost:27017/test', 'dashboard'),
    exchange = require('../exchange.IO');

mongodb.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/public/css'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/app/:page', function(req, res) {
    res.render(req.params.page);
});

app.post('/api/login', mongodb.login);
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
