
var express = require('express');
const router = express.Router();
const multer = require('multer');
var mysql = require('mysql');
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
        var path=Date.now() + "-" + file.originalname
        connection.query('INSERT INTO `touxiang` SET ?', {
            path:path ,
        })
        cb(null,path)
    }
})
var upload = multer({
    storage: storage
});

router.post('/getimg', upload.single('logo'), function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query('SELECT * FROM touxiang', function (error, results, fields) {
        for (var i = 0; i < results.length; i++) {
            src = results[i].path
        }
        res.send(src);
    })
});


router.post("/gai", function (req, res) {
    res.append("Content-Type", "text/plain;charset=UTF-8")
    res.append("Access-Control-Allow-Origin", "*");
   var params= req.body
    connection.query('SELECT * FROM informations', function (error, results, fields) {
        var flag = false;//没有
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].name)
            if (params.name == results[i].name) {
                flag = true;//有
            }
        }
        if (flag) {
            //改
            connection.query(`UPDATE informations
                 SET name='${params.name}',email='${params.email}',tel='${params.tel}',QQ='${params.QQ}',twitter='${params.twitter}',intro='${params.intro}',status='1'
                  where name='${params.name}'`, [], function (res) {
            })
        } else {
            //加
            connection.query('INSERT INTO `informations` SET ?', {
                name: params.name,
                email: params.email,
                tel: params.tel,
                QQ: params.QQ,
                twitter: params.twitter,
                intro: params.intro,
                status: 1
            });
        }
    })
})
//实例化第一个express的应用
router.get('/zheng', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Content-Type", "text/plain;charset=UTF-8")
    connection.query('select * from `informations`', function (erro, result, file) {
        if (erro) {
            throw erro
        }
        // console.log(result);
        res.json(result)
    })
});

module.exports = router;
