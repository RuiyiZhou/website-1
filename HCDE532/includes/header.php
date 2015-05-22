
<!-- Begin Header -->


<!--Begin Scripts-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>

<script src="jquery.flexslider-min.js"></script>
<!--End Scripts-->



<div id="header">


<h1 id="logo"><a href="index.php">Ruiyi Zhou</a></h1>
<img id="toggle" src="images/img-toggle.png" alt="toggle"/>
</div>
<!-- End Header -->
<?php include('includes/navigation.php'); ?>
<!--Begin Flexslider-->
<script type="text/javascript" >

$(window).load(function() {
	
	$('.flexslider').flexslider({
		slideshowSpeed: 2000,
		});
});
</script>
<!--End Flexslider-->

<!--Begin Toggle-->
<script type="text/javascript">

$(window).load(function () {
	$('#toggle').click(function () {
		$('#navigation').toggle();
	});
	
	$(window).resize(function() {
		if ($(window).width() >801) {
			
		    $('#nagivation').css('display' , 'block');	
		}
	});
});

</script>
<!--End Toggle-->


<!-- Begin Content -->
<div id="middle">