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
                $(".am-img-thumbnail").attr("src","http://localhost:9090/"+res)
            })
        })
        $("#btn1").on("click", function(){
            $.ajax({
                url: 'http://localhost:9090/person/getimg',
                type: 'POST',
                cache: false, //不必须
                data: new FormData($('#uploadForm')[0]),
                processData: false,
                contentType: false,
            }).then(function (res) {
                $(".am-img-thumbnail").attr("src","http://localhost:9090/"+res)
            })
        })

                $(function () {
                    $("#btn").on("click",function () {
                        $.ajax({
                            type: "POST",
                            url: "http://localhost:9090/person/gai",
                            data: {
                                name: $("#user-name").val(),
                                email: $("#user-email").val(),
                                tel:$("#user-phone").val(),
                                QQ:$("#user-QQ").val(),
                                twitter:$("#user-weibo").val(),
                                intro:$("#user-intro").val()
                            }
                        })
                        $(".s").text("")
                        $(".s2").text("")
                        var bflag=true ;//
                var bflag1=true ;//
                bflag = /^((13[0-9])|(14[5-7])|(15[0-35-9])|(18[0-9]))\d{8}$/.test($("#user-phone").val())
                if(bflag==false){
                    $(".s").text("手机号不对")
                }
                bflag1 =/^\w+@\w+\.\w+$/.test($("#user-email").val())
                if(bflag1==false){
                    $(".s2").text("邮箱格式不对")
                }

                if(bflag,bflag1){
                    alert("保存成功")
                }
            })

            $.ajax({
                type: "GET",
                url: "http://localhost:9090/person/zheng",
                dataType:"json"
            }).done(function (res) {
                for (var i = 0; i < res.length; i++) {
                    $("#user-name").val(res[i].u_name1);
                    $("#user-email").val(res[i].email);
                    $("#user-phone").val(res[i].tel);
                    $("#user-QQ").val(res[i].u_post);
                    $("#user-weibo").val(res[i].twitter);
                    $("#user-intro").val(res[i].intro)
                }
            })
        })
    })
})