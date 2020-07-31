var url = require("url");
var http = require("http"); 
var db = require("./database");

console.log("Request received.");
http.createServer(function (request, response) {
	response.writeHead(200, {	
		"Content-Type": "text/plain"
	          });
	var sql="SELECT name FROM hello where status = 'visible'";
	db.query(sql, function (err, data) {
		if (err) throw err;
	        response.end(data[0].name);
	 });
}).listen(5000);
console.log("Server has started successfully;");
