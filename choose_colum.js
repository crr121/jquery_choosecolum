# jquery_choosecolum
jQuery实现栏目选择
$(function(){
	$("div:eq(1),div:last-child").hide();//默认为隐藏
	$("li").click(function(){
		$("li").css("background-color","lightgray");
		$(this).css("background-color","aquamarine");
//		var list =  $("li");
        id= $(this).attr("id");
//      console.log(id);
        /*获取当前li的索引值*/
//      index = $("li").eq("i");
       
//      console.log(id);
        $("div").each(function(i,val){
//      	console.log(i);
//      	console.log(val);
         if(id== i){
         	$(this).show();
         }else{
         	$(this).hide();
         }
        	
        })
        
        
	})
	
})
