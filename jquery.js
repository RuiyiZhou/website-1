$(document).ready(function () {
	  
 $(".projectname").hover(function(){
    $(".projectname");fadeTo('slow',0.5);
    },
    function(){
    $("p");addClass("blue");
  }); 
  
	$('.portfoliolist').click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
});
    });
