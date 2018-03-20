const express=require("express");
const app=express();
const mysql=require("mysql");
var connection = mysql.createConnection({
    host: '101.200.60.236',
    user: 'root',
    password: '',
    database: 'hengyangyungui'
});
//执行连接
connection.connect();
/*connection.query('SELECT * FROM `group`', function(error, results, fields) {
    if(error) throw error;
    console.log('The solution is: ', results);
});*/


app.listen(9090);

console.log("开启服务器");