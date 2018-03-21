
var express = require('express');
const router = express.Router();
const multer = require('multer');
const mysql=require("../mysql");

var src = '';
var storage = multer.diskStorage({
    // 上传文件夹
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // 保存的文件名字
    filename: function (req, file, cb) {
        var path=Date.now() + "-" + file.originalname;
        mysql('INSERT INTO `touxiang` SET ?', {
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
    mysql('SELECT * FROM touxiang',{}, function (results) {
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
    mysql('SELECT * FROM informations',{}, function (results) {
        var flag = false;//没有
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].name)
            if (params.name == results[i].name) {
                flag = true;//有
            }
        }
        if (flag) {
            //改
            mysql(`UPDATE informations
                 SET name='${params.name}',email='${params.email}',tel='${params.tel}',QQ='${params.QQ}',twitter='${params.twitter}',intro='${params.intro}',status='1'
                  where name='${params.name}'`, [], function (res) {
            })
        } else {
            //加
            mysql('INSERT INTO `informations` SET ?', {
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

router.get('/zheng', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Content-Type", "text/plain;charset=UTF-8")
    mysql('select * from `informations`',{}, function (result) {
        res.json(result)
    })
});

router.post('/delete', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    mysql("update informations set status=0 where id=?",[req.body.id])
});

router.post('/search', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var str="select * from informations where name like '%"+req.body.name+"%'"
    mysql(str,{},function (result) {
        res.json(result);
    })
});

module.exports = router;
