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

router.get('/', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    // console.log(req.body.u_name);
    var str = "select * from `userinfo` where u_status=1";
    mysql(str,[],function( results){
        res.json(results)
    })
});

router.post('/register', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
       console.log(req.body);
    var str = "select * from `userinfo` where u_name=?";
    mysql(str,[req.body.u_name],function( results){
    	
			console.log(results.length);
			if(results.length>0){
				res.send("用户名已存在");
			}
			else{
				mysql("INSERT INTO userinfo(`u_name`,`u_pwd`,`u_post`,`u_rank`,`u_status`) VALUES('"+req.body.u_name+"','"+req.body.u_pwd+"','"+req.body.u_post+"','"+req.body.u_rank+"',1)",{},function(results){
					res.send("注册成功");
				})
			}

    	
//      res.json(results)
        
    })
});

module.exports = router;