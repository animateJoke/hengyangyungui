define("config",[],function(){require.config({paths:{html5:["http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min","lib/html5shiv/html5shiv.min"],jquery:["http://libs.baidu.com/jquery/1.11.1/jquery.min","lib/jquery-1.11.1.min"],"jquery-cookie":["lib/jquery.cookie/jquery.cookie"],validate:"lib/jquery-validation-1.14.0/jquery.validate",transform:"lib/jquery-transform",tools:"lib/jquery-tools",joinUs:"joinUs",job:"job"},shim:{validate:["jquery"],transform:["jquery"],tools:["jquery"],joinUs:["jquery"],job:["jquery","validate"],"job-news":["jquery"]}})});