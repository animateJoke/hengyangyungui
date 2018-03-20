var http=require("http");
var querystring=require("querystring");
var mysql=require("mysql");

var connection=mysql.createConnection({
		host: '101.200.60.236',
        user: 'root',
        password: '',
        database: 'hengyangyungui'
})

connection.connect();
var server=http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Content-Type","text/plain;charset=UTF-8");
	
	var data="";
	var params;
	req.on("data",(chunk)=>{
		data+=chunk;
	});
	req.on("end",()=>{
		params = querystring.parse(data);
		connection.query(`SELECT*FROM userinfo WHERE u_name='${params.username}'`,function(error,results,fields){
			if(results.length>0){
				if(results[0].u_pwd==params.userpwd){
					res.end("登录成功");
				}else{
					res.end("登录失败");
				}
			}else{
				res.end("登录失败");
			}
		})
	});
	
})

server.listen(8888);
console.log("服务开启")