require(["config"],function(){require(["jquery"],function(a){a(function(){var e=JSON.parse(sessionStorage.getItem("user"))[0].u_id;a.ajax({url:"http://101.200.60.236:9090/person/getinfo",type:"post",dataType:"json",data:{id:e}}).then(function(t){var e=t;a(".am-img-thumbnail").attr("src","http://101.200.60.236:9090/"+e[0].path),a("#u_id").val(e[0].u_id),a("#user-name").val(e[0].u_name1),a("#user-email").val(e[0].u_email),a("#user-phone").val(e[0].u_tel),a("#user-QQ").val(e[0].u_post),a("#user-weibo").val(e[0].u_pwd),a("#user-intro").val(e[0].u_intro)}),a("#btn1").on("click",function(){a.ajax({url:"http://101.200.60.236:9090/person/getimg",type:"POST",cache:!1,data:new FormData(a("#uploadForm")[0]),processData:!1,contentType:!1}).then(function(t){console.log(t),a(".am-img-thumbnail").attr("src","http://101.200.60.236:9090/"+t),a.ajax({url:"http://101.200.60.236:9090/person/getpic",type:"POST",data:{path:t,id:e}})})})}),a(function(){a("#btn").on("click",function(){a(".s").text(""),a(".s2").text("");var t;0==/^((13[0-9])|(14[5-7])|(15[0-35-9])|(18[0-9]))\d{8}$/.test(a("#user-phone").val())&&a(".s").text("手机号不对"),0==(t=/^\w+@\w+\.\w+$/.test(a("#user-email").val()))&&a(".s2").text("邮箱格式不对"),t&&a.ajax({type:"POST",url:"http://101.200.60.236:9090/person/gai",data:a("#myform").serialize()}).then(function(){alert("保存成功")})})})})});