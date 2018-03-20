var mysql = require('mysql');
const http = require('http');
const url = require('url');
const querystring = require('querystring');
var express = require('express');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yungui'
});
connection.connect();


const server=http.createServer((request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "text/plain;charset=UTF-8");
    var data='';
    var params;
    request.on("data",function (chunk) {
        data+=chunk;
    })
    request.on("end",function () {
        params=querystring.parse(data)
        console.log(params.name,params.email);
        connection.query('SELECT * FROM informations', function (error, results, fields) {
            var flag=false;//没有

            for (var i = 0; i < results.length; i++) {
                console.log(results[i].name)
                if(params.name==results[i].name){
                    flag=true;//有
                }
            }
            if(flag){
                //改
                connection.query(`UPDATE informations 
                 SET name='${params.name}',email='${params.email}',tel='${params.tel}',QQ='${params.QQ}',twitter='${params.twitter}',intro='${params.intro}',status='1' 
                  where name='${params.name}'`, [],function(res){
                })
            }else{
                //加
                connection.query('INSERT INTO `informations` SET ?', {
                    name: params.name,
                    email:params.email,
                    tel:params.tel,
                    QQ:params.QQ,
                    twitter:params.twitter,
                    intro:params.intro,
                    status:1
                });
            }
        })
    })
})
//实例化第一个express的应用
var app = express();
app.get('/zheng', function(req, res) {
    res.send("");
});
server.listen(3333);
console.log("开启服务器");
