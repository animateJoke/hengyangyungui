(function(){
    $(function(){
        $.fn.extend({
            rotate:function (num1,num2){
                var step=num2-num1>0?Math.ceil((num2-num1)/10):Math.floor((num2-num1)/10);
                var num=0;
               this.rotateTimer= setInterval(function(){
                    num++;
                    $(this).css("transform","rotate("+(num1+step*num)+"deg)");
                    if(num>=10){
                        clearInterval(this.rotateTimer)
                    }
                }.bind(this),50);
                return this
            },
            scale:function(num1,num2){
                var num=0;
                var step=(num2-num1)*10;
                this.scaleTimer=setInterval(function(){
                    num++;
                    $(this).css("transform","scale("+(num1+(step*num)/100)+")");
                    if(num>=10){
                        clearInterval(this.scaleTimer)
                    }
                }.bind(this),30);
                return this
            },
            scaleX:function(num1,num2){
                var num=0;
                var step=(num2-num1)*10;
                this.scaleTimer=setInterval(function(){
                    num++;
                    $(this).css("transform","scaleX("+(num1+(step*num)/100)+")");
                    if(num>=10){
                        clearInterval(this.scaleTimer)
                    }
                }.bind(this));
                return this
            }
        })
    })
})(jQuery);