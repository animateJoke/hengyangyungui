(function(){
    $.extend({
        toData:function(str){
             // name=aaa&sdada=dada
            var obj={};
            if(str.indexOf('&')!=-1){
               var arr= str.split('&');

               for(var i=0;i<arr.length;i++){
                  var arr2=arr[i].split("=");
                   obj[arr2[0]]=arr2[1];
               }
            }
            return obj;
        }
    })
})(jQuery);