define("job",["jquery","validate"],function($){
    $(function(){
        $("#myform").validate({
            rules: {
                j_name: {
                    required: true,
                    maxlength:5
                },
                j_class: {
                    required: true,
                    minlength: 5
                },
                j_address: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                j_num: {
                    required: true,
                    email: true
                },
                j_msg: {
                    required: "#newsletter:checked",
                    minlength: 2
                }
            },
            messages: {
                j_name: {
                    required: "职位名称不能为空",
                    minlength: 2
                },
                j_class: {
                    required: "职位类别不能为空",
                    minlength: 5
                },
                j_address: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                j_num: {
                    required: true,
                    email: true
                },
                j_msg: {
                    required: "#newsletter:checked",
                    minlength: 2
                }
            }
        })
    });
});