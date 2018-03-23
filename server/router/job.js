const express = require('express');
const router = express.Router();
const mysql=require("../mysql");

router.post('/job', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "insert into `job` set ?";
    req.body.j_time=new Date();
    req.body.j_status=1;
    mysql(str,req.body,function(results){
        res.send("成功")
    })
});
router.get('/job', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `job` where j_status=1 order by j_id desc LIMIT ?,7";
    mysql(str,[req.query.index*7],function(results){
        res.json(results)
    })
});
router.post("/del",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
    var str = "update job set j_status=0 where j_id=?";
    mysql(str,[req.body.id],function(results){
        res.json(results)
    })
});

router.post("/int",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
    var str = "select j_html from job where j_id=?";
    mysql(str,[req.body.id],function(results){
        res.json(results)
    })
});
router.get("/count",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
    var str = "select count(*) from `job` where j_status=1";
    mysql(str,[],function(results){
        res.json(results[0])
    })
});
module.exports = router;