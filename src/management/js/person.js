require(["config"], function () {
    require(["jquery"], function ($) {

        $(function () {
            $.ajax({
                url: 'http://localhost:9090/person/getimg',
                type: 'POST',
                cache: false, //不必须
                data: new FormData($('#uploadForm')[0]),
                processData: false,
                contentType: false,
            }).then(function (res) {
                $(".am-img-thumbnail").attr("src", "http://localhost:9090/" + res)
            })
        })
        $("#btn1").on("click", function () {
            $.ajax({
                url: 'http://localhost:9090/person/getimg',
                type: 'POST',
                cache: false, //不必须
                data: new FormData($('#uploadForm')[0]),
                processData: false,
                contentType: false,
            }).then(function (res) {
                $(".am-img-thumbnail").attr("src", "http://localhost:9090/" + res)
            })
        })

        $(function () {
            $("#btn").on("click", function () {

                $(".s").text("")
                $(".s2").text("")
                var bflag = true;//
                var bflag1 = true;//
                bflag = /^((13[0-9])|(14[5-7])|(15[0-35-9])|(18[0-9]))\d{8}$/.test($("#user-phone").val())
                if (bflag == false) {
                    $(".s").text("手机号不对")
                }
                bflag1 = /^\w+@\w+\.\w+$/.test($("#user-email").val())
                if (bflag1 == false) {
                    $(".s2").text("邮箱格式不对")
                }

                if (bflag, bflag1) {
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:9090/person/gai",
                        data: $("#myform").serialize()
                    }).then(function () {
                        alert("保存成功")
                    });

                }
            })


            var msg = JSON.parse(sessionStorage.getItem("user"));

            $("#u_id").val(msg[0].u_id);
            $("#user-name").val(msg[0].u_name1);
            $("#user-email").val(msg[0].u_email);
            $("#user-phone").val(msg[0].u_tel);
            $("#user-QQ").val(msg[0].u_post);
            $("#user-weibo").val(msg[0].u_pwd);
            $("#user-intro").val(msg[0].u_intro)

        })
    })
})