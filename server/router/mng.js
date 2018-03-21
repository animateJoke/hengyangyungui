const express = require('express');
const router = express.Router();
const mysql=require("../mysql");


router.post('/mng', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "insert into `mng` set ?";
    req.body.time=new Date();
    req.body.status=1;
    mysql(str,req.body,function(results){
        console.log(results);
    })
});
router.get('/mng', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from mng";
    mysql(str,{},function(results){
        res.json(results)
    })
});


module.exports = router;