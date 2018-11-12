var express = require('express');  
var router = express.Router();
var request = require("request");





router.get('/:symbol', function (req, res) {
    request("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+req.params.symbol+"&outputsize=full&apikey=CZ1P76GO52HO4VSZ", function(error, response, body) {
  		res.json(JSON.parse(body));
	});
  
});

module.exports = router;