const express = require('express');
const router = express.Router();
const mysql=require("../mysql");

router.post('/job', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "insert into `job` set ?";
    req.body.j_time=new Date();
    req.body.j_status=1;
    mysql(str,req.body,function(results){
        console.log(results);
    })
});
router.get('/job', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `job` where j_status=1";
    mysql(str,{},function(results){
        res.json(results)
    })
});
router.post("/del",function(req, res){
    res.append("Access-Control-Allow-Origin","*");
    var str = "update job set j_status=0 where j_id=?";
    mysql(str,[req.body.id],function(results){
        res.json(results)
    })
})
module.exports = router;