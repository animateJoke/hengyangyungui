require(["config"],function(){
    require(["jquery","validate"],function($){
        $(function(){
            $("#myform").validate({
                rules: {
                    j_name: {
                        required: true
                    },
                    j_class: {
                        required: true
                    },
                    j_address: {
                        required: true
                    },
                    j_num: {
                        required: true
                    },
                    j_msg: {
                        required: true
                    }
                },
                messages: {
                    j_name: {
                        required: "职位名称不能为空"
                    },
                    j_class: {
                        required: "职位类别不能为空"
                    },
                    j_address: {
                        required: "地址不能为空"
                    },
                    j_num: {
                        required: "数量不能为空"
                    },
                    j_msg: {
                        required: "信息不能为空"
                    }
                },
                submitHandler:function(form){
                    $.ajax({
                        url:"http://localhost:9090/job/job",
                        type:"post",
                        dataType:"json",
                        data:$("#myform").serialize()
                    }).then(function(res){
                        console.log(res);
                    });
                    return false
                }
            })
        });
        $("#job_btn").on("click",function(){
            $("#iframe").show();
            $("#job_btn2").show()
        })
        $("#job_btn2").on("click",function(){
            $("#j_html").val(sessionStorage.getItem("html"));
            sessionStorage.removeItem("html");
            $("#iframe").hide();$("#job_btn2").hide();

        })
    })
})
