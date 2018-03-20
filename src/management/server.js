const express = require('express');
var app = express();
app.use(express.static(__dirname + '/files'));
app.use(express.static('uploads'));
const multer = require('multer');
const querystring = require('querystring');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yungui'
});
connection.connect();
var src = ''
var storage = multer.diskStorage({
    // 上传文件夹
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // 保存的文件名字
    filename: function (req, file, cb) {
        connection.query('INSERT INTO `touxiang` SET ?', {
            path: Date.now() + "-" + file.originalname,
        })
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({
    storage: storage
});

app.post('/getimg', upload.single('logo'), function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query('SELECT * FROM touxiang', function (error, results, fields) {
        for (var i = 0; i < results.length; i++) {
            src = results[i].path
        }
        res.send(src);
    })
});

app.listen(1111);