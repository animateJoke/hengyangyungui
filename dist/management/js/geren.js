require(["config"],function(){require(["jquery"],function(u){u(function(){var t=JSON.parse(sessionStorage.getItem("user"))[0].u_id;u.ajax({url:"http://101.200.60.236:9090/person/getinfo",type:"post",dataType:"json",data:{id:t}}).then(function(t){var e=t;u(".pic").attr("src","http://101.200.60.236:9090/"+e[0].path),u("#u_id").text(e[0].u_id),u("#user-name").text(e[0].u_name1),u("#user-email").text(e[0].u_email),u("#user-phone").text(e[0].u_tel),u("#user-QQ").text(e[0].u_post),u("#user-weibo").text(e[0].u_pwd),u("#user-intro").text(e[0].u_intro)})})})});