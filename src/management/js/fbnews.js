require(["config"],function(){
    require(["jquery","validate"],function($){
        $(function(){
            $("#myform").validate({
                rules: {
                    title: {
                        required: true
                    },
                    neditor: {
                        required: true
                    },
                    ntype: {
                        required: true
                    },
                    time: {
                        required: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    title: {
                        required: "*标题不能为空"
                    },
                    neditor: {
                        required: "作者可填可不填"
                    },
                    ntype: {
                        required: "*类别不能为空"
                    },
                    time: {
                        required: "日期可填可不填"
                    },
                    message: {
                        required: "*内容不能为空"
                    }
                },
                submitHandler:function(form){
                    $.ajax({
                        url:"http://localhost:9090/mng/mng",
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
    })
})
