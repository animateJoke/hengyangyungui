//3.利用express录入信息
var express = require("express");
var querystring = require("querystring");
var mysql = require("mysql");
var app = express();
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "hyyg"
});
connection.connect();
app.post("/", (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "text/plain;charset=UTF-8");
	
	
	req.on("data", (chunk) => {
		data += chunk;
	})
	req.on("end", () => {
		
		connection.query( "SELECT * FROM `mng` where ntype=''", function(error, results, fields) {
			console.log(results)
			res.send(results);
		})
	})	//	
})
app.listen(3336);
console.log("服务开启");

