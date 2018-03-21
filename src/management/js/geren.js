require(["config"], function () {
    require(["jquery"], function ($) {

        $.ajax({
            type: "GET",
            url: "http://localhost:9090/person/zheng",
            dataType:"json"
        }).done(function (res) {
            for (var i = 0; i < res.length; i++) {
                $("#user-name").text(res[i].u_name1);
                $("#user-email").text(res[i].email);
                $("#user-phone").text(res[i].tel);
                $("#user-QQ").text(res[i].u_post);
                $("#user-weibo").text(res[i].twitter);
                $("#user-intro").text(res[i].intro)
            }
        })
        $.ajax({
            type: "GET",
            url: "http://localhost:9090/person/get",
            dataType:"json"
        }).done(function (res) {
            for (var i = 0; i < res.length; i++) {
               var src=res[res.length-1].path
            }
            $(".pic").attr("src","http://localhost:9090/"+src)
        })
    })
})