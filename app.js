var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.set('views', __dirname + '../views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.static(__dirname + '/views'));
app.get('/', function (req, res) {
  res.sendFile(path.resolve("views/test.html"));
});


var testRequest = require('./routers/request');

app.use('/request', testRequest);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
