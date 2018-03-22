const express = require('express');
const router = express.Router();
const mysql=require("../mysql");


router.post('/mng', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "insert into `mng` set ?";
    req.body.time=new Date();
    req.body.status=1;
    mysql(str,req.body,function(results){
        res.json(results);
    })
});
router.get('/mng', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from mng where status=1";
    mysql(str,{},function(results){
        res.json(results)
    })
});

router.post('/del', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "update mng set status=0 where id=?";
   
    mysql(str,[req.body.id],function(results){
        res.json(results);
    })
});

//router.get('/list', function(req, res, next) {
//  res.append("Access-Control-Allow-Origin","*");
//  var str = "select * from mng";
//  mysql(str,{},function(results){
//      res.send(results)
//  })
//});

router.post('/nid', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from mng where id=?";
    mysql(str,[req.body.id],function(results){
        res.send(results)
    })
});
module.exports = router;