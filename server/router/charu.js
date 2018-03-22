
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
        },function () {
            cb(null,path)
        })

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

router.get('/get',function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    mysql('SELECT * FROM touxiang',{}, function (results) {
        res.send(results);
    })
});


router.post("/gai", function (req, res) {
    res.append("Content-Type", "text/plain;charset=UTF-8");
    res.append("Access-Control-Allow-Origin", "*");
   var params= req.body;
   var id=params.u_id;
    delete(params.u_id);
   mysql("update userinfo set ? where u_id="+id,params,function (result) {
       res.send()
   })

})

router.get('/zheng', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Content-Type", "text/plain;charset=UTF-8");


    mysql('select * from `userinfo` where u_status=1',{}, function (result) {

        res.json(result)
    })
});

router.post('/delete', function (req, res) {
    console.log(req.body);
    res.append("Access-Control-Allow-Origin", "*");
    mysql("update userinfo set u_status=0 where u_id=?",[req.body.id])
});

router.post('/search', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var str="select * from userinfo where name like '%"+req.body.name+"%'";
    mysql(str,{},function (result) {
        res.json(result);
    })
});

module.exports = router;
