require(["config"],function(){
    require(["jquery","validate"],function($){
        $(function(){
            $("#myform").validate({
                rules: {
                    j_position: {
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
                    },
                    j_html: {
                        required: true
                    }
                },
                messages: {
                    j_position: {
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
                    },
                    j_html: {
                        required: "请上传页面结构"
                    }
                },
                submitHandler:function(form){
                    $.ajax({
                        url:"http://101.200.60.236:9090/job/job",
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
        });
        $("#job_btn2").on("click",function(){
            $("#j_html").val(sessionStorage.getItem("news"));
            sessionStorage.removeItem("news");
            $("#iframe").hide();$("#job_btn2").hide();

        })
    })
})
