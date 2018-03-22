require(["config"], function () {
    require(["jquery"], function ($) {

        $(function () {
            var u_id=JSON.parse(sessionStorage.getItem("user"))[0].u_id ;
            $.ajax({
                url:"http://101.200.60.236:9090/person/getinfo",
                type:"post",
                dataType:"json",
                data:{
                    id:u_id
                }
            }).then(function(res){
                var msg=res;
                $(".pic").attr("src", "http://101.200.60.236:9090/" +msg[0].path);
                $("#u_id").text(msg[0].u_id);
                $("#user-name").text(msg[0].u_name1);
                $("#user-email").text(msg[0].u_email);
                $("#user-phone").text(msg[0].u_tel);
                $("#user-QQ").text(msg[0].u_post);
                $("#user-weibo").text(msg[0].u_pwd);
                $("#user-intro").text(msg[0].u_intro)
            });
            
        })


    })
})