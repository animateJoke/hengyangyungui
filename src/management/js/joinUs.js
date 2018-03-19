define("joinUs",["jquery"],function($){
    $(function(){
        $("table thead tr th input").on("click",function(){
            $("#tab input").prop("checked",$(this).prop("checked"))
        })
    });
})