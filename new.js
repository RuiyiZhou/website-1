$(document).ready(function(){
/*	$(".portfolioblock").hover(function(){
		$(this).fadeTo(200,0.5);},
		function(){
		$(this).fadeTo(200,1);
		}); */
		$('.portfolioblock').click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
	}); 
});