var mysql = require('mysql');
const bodyParser = require("body-parser")
var express = require('express');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yungui'
});
connection.connect();
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.post("/gai", function (req, res) {
    console.log(req.body);
    // connection.query('SELECT * FROM informations', function (error, results, fields) {
    //     var flag = false;//没有
    //     for (var i = 0; i < results.length; i++) {
    //         console.log(results[i].name)
    //         if (params.name == results[i].name) {
    //             flag = true;//有
    //         }
    //     }
    //     if (flag) {
    //         //改
    //         connection.query(`UPDATE informations
    //              SET name='${params.name}',email='${params.email}',tel='${params.tel}',QQ='${params.QQ}',twitter='${params.twitter}',intro='${params.intro}',status='1'
    //               where name='${params.name}'`, [], function (res) {
    //         })
    //     } else {
    //         //加
    //         connection.query('INSERT INTO `informations` SET ?', {
    //             name: params.name,
    //             email: params.email,
    //             tel: params.tel,
    //             QQ: params.QQ,
    //             twitter: params.twitter,
    //             intro: params.intro,
    //             status: 1
    //         });
    //     }
    // })
})


//实例化第一个express的应用


app.get('/zheng', function (req, res) {
    res.append("Content-Type", "text/plain;charset=UTF-8")
    connection.query('select * from `informations`', function (erro, result, file) {
        if (erro) {
            throw erro
        }
        console.log(result);
        res.json(result)
    })
});
app.listen(3333);
console.log("开启服务器");
