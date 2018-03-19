require(["config"],function(){
    require(["jquery","transform"],function($,a){
        $(function(){
            var num=0;
            $(".content li span").on("click",function(){
                num++;
                if(num%2==1){
                    $(this).find("i").stop().rotate(-90,90);
                    $(this).siblings("div").stop().slideDown(1000);
                }else {
                    $(this).find("i").stop().rotate(90,-90);
                    $(this).siblings("div").stop().slideUp(1000);
                }
            })
        })
    });
})