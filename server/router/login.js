const express = require('express');
const router = express.Router();
const mysql=require("../mysql");


router.post('/', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    // console.log(req.body.u_name);
    var str = "select * from `userinfo` where u_name=? and u_pwd=?";
    mysql(str,[req.body.u_name,req.body.u_pwd],function( results){
        res.json(results)
    })
});
module.exports = router;