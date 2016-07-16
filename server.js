var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    Mongod = require('./mongod.js'),
    mongodb = Mongod('mongodb://localhost:27017/test', 'dashboard');

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

app.listen(8000, function() {
    console.log('server running on port 8000...');
});
