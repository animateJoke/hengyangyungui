require(["config"],function(){
    require(["jquery"],function($){
        $(function(){
            clearInterval(window.timer);
            var num=$(".list ul li").length;
            for(var i=0; i<num; i++){
                if(i==0){
                    $(".list ol").append($("<li class='active'></li>"))
                }else {
                    $(".list ol").append($("<li></li>"))
                }
            }
            $(".list ol li").on("click",function(){
                index=$(this).index()-1;
                autoPlay();
            });

            $(".list ol").css("marginLeft",num*-20);
            $(".list ul").append($(".list ul li:first").clone());
            $(".list ul").css("width",$(".list ul li").length*800);

            var index=0;
            function autoPlay(){
                index++;
                if(index>=num){
                    $(".list ul").animate({
                        left:index*-800
                    },1000,function(){
                        $(".list ul").css("left",0);
                        index=0;
                        $(".list ol li").eq(index).addClass("active").siblings().removeClass("active");
                    })
                }else {
                    $(".list ul").animate({
                        left:index*-800
                    },1000,function(){
                        $(".list ol li").eq(index).addClass("active").siblings().removeClass("active");
                    })
                };

            };
            window.timer=setInterval(function(){
                autoPlay();
            },2000);

            $(".list").on("mouseenter",function(){
                clearInterval(window.timer);
            }).on("mouseleave",function(){
                window.timer=setInterval(function(){
                    autoPlay()
                },2000)
            })
        })
    });
});