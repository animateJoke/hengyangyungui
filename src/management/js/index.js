require(["config"],function(){
    require(["jquery","transform"],function($,a){
        $(function(){
            $(".content .left .nav li span").attr("num",0);
            $(".content .left .nav li span").on("click",function(){
                $(this).attr("num",parseInt($(this).attr("num"))+1);
                if($(this).attr("num")%2==1){
                    $(this).find("i").stop().rotate(-90,90);
                    $(this).siblings("div").stop().slideDown(1000);
                }else {
                    $(this).find("i").stop().rotate(90,-90);
                    $(this).siblings("div").stop().slideUp(1000);
                }
            });
            $(".content .left .nav li div p").on("click",function(){
                $(".right-style").attr("href","css/"+$(this).data("info")+".css");
                $(".content .right .right_bot").html("").load($(this).data("info")+".html?id="+Math.random(),function(){
                });

                $(".content .right .breadcrumb").html("");
                $(".content .right .breadcrumb").append("<li>"+$(this).parent().siblings("span").text().replace(/>/,"")+"</li><li>"+$(this).text()+"</li>")
            });

        })
    });
})