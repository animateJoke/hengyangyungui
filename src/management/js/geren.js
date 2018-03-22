require(["config"], function () {
    require(["jquery"], function ($) {

        $(function () {
            var msg = JSON.parse(sessionStorage.getItem("user"));
            console.log(msg);
            $("#user-name").text(msg[0].u_name1);
            $("#user-email").text(msg[0].u_email);
            $("#user-phone").text(msg[0].u_tel);
            $("#user-QQ").text(msg[0].u_post);
            $("#user-weibo").text(msg[0].u_pwd);
            $("#user-intro").text(msg[0].u_intro)
            $(".pic").attr("src","http://localhost:9090/"+msg[0].path)
            
        })


    })
})