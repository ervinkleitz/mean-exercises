//Exercise to parse the request body when the header content-type 
//is 'application/x-www-form-urlencoded' and 'application/json'.

var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
 
var bodyParser = {
	//Parses data when header is application/json
  	json: function (req, res, next) {
	    if (req.headers['content-type'].toLowerCase() === 'application/json') {
	      req.on('data', function (data) {
	        try {
	          req.body = JSON.parse(data);
	          next();
	        } catch (e) {
	          req.body = {};
	          next();
	        }
	      });
	    } else {
	      next();
	    }
  	},
  	//Parses data when header is application/x-www-form-urlencoded
  	// urlencoded: function(req, res, next){
  	// 	if (req.headers['content-type'].toLowerCase() === 'application/x-www-form-urlencoded') {
   //    		if (!parseInt(req.headers['content-length'])) {
		 //        req.body = {};
		 //        next();
   //    		} else {
	  //       req.on('data', function (data) {
		 //        var json_data = data.toString().replace(/=/g, '":"').replace(/&/g, '","');
	  //         	req.body = JSON.parse('{"' + json_data + '"}');
	  //       	next();
   //     		});
   //    		}
   //  	} else {
   //    	next();
   //  	}
  	// }
};
 
app.use(bodyParser.json);
// app.use(bodyParser.urlencoded);
 
app.post('/test', function (req, res) {
  console.log(req.body);
  res.json(req.body);
});

//Listens in on environment port or port 8080
app.listen(PORT);
console.log('Listening on port ' + PORT);