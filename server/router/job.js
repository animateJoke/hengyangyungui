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
    var str = "select * from job";
    mysql(str,{},function(results){
        res.json(results)
    })
});
module.exports = router;