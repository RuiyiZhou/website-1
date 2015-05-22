
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title>Parallax Demo</title>

	<link href="css/reset.css"  rel="stylesheet" type="text/css" />
	<link href="css/chrome.css" rel="stylesheet" type="text/css" />
	<link href="css/demo1.css"     rel="stylesheet" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
	<![endif]-->

	<script type="text/javascript" src="js/jquery-1.7.1.js"          ></script>
	<script type="text/javascript" src="js/side-nav.js"              ></script>
	<script type="text/javascript" src="js/backgrounds.js"           ></script>
	<script type="text/javascript" src="js/kinetics.js"              ></script>

	<!-- parallax.js really screws with the DOM, so make sure it's included last so other things don't notice :) -->
	<script type="text/javascript" src="js/parallax.js"           ></script>
</head>
<body>
	<!-- this is to make the page's vertical scrollbar appear the correct height -->
	<div id="mock-scroller"></div>
	<ul id="nav"></ul>

	<div id="content">
		<section id="story-header">
			<div class="story">
				<div id="logo">
					<img class="bg animate" src="images/intropage.png" anim-detached="true" />
				</div>

				<h2>First Pane</h2>
				<p>This is the first slide.  Nothing much to see, just pointing it out.</p>
				<p>Scroll Down</p>
			</div>
		</section>


		<section id="story-intel">
			<img class="bg animate" src="images/figure.png" anim-detached="true" />
			<div class="story">
				<div>
					<h2>Hi, I'm Ruiyi Zhou</h2>
					<p>
						I'm currently a first-year master student in Human Centered Design & Engineering at University of Washington.
					</p>
				</div>
			</div>
		</section>


		<section id="story-william">
			<img class="bg animate" src="images/Intel_Will_bg.jpg" anim-detached="true" />
			<div class="story">
				<div>
					<h2>Background parallax</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula aliquam eros a tempus. Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Quisque et urna lacus, quis aliquam purus. Nulla semper arcu vel diam auctor condimentum. Nam molestie sem eu quam fermentum a tempus nisi aliquet. Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec ipsum ac mauris imperdiet luctus sed vitae ligula. Phasellus nec hendrerit neque.
					</p>
				</div>
			</div>
		</section>


		<section id="story-bing">
			<img class="bg animate" src="images/bing-bg-01.jpg" anim-detached="true" />
			<div class="story">
				<div>
					<h2>Background parallax</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula aliquam eros a tempus. Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Quisque et urna lacus, quis aliquam purus. Nulla semper arcu vel diam auctor condimentum. Nam molestie sem eu quam fermentum a tempus nisi aliquet. Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec ipsum ac mauris imperdiet luctus sed vitae ligula. Phasellus nec hendrerit neque.
					</p>
				</div>
			</div>
		</section>


		<section id="story-nike" data-nav="Nike">
			<ul class="slide slide-1 animate" anim-detached="true">
				<li><img src="images/nike/thumb-0.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-1.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-2.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-3.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-4.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-5.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-6.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-7.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-8.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-0.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-1.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-2.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-3.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-4.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-5.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-6.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-7.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-8.jpg" width="317" height="176"></li>
			</ul>
			<ul class="slide slide-2 animate" anim-detached="true">
				<li><img src="images/nike/thumb-9.jpg"  width="317" height="176"></li><li><img src="images/nike/thumb-10.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-11.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-12.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-13.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-14.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-15.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-16.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-17.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-9.jpg"  width="317" height="176"></li><li><img src="images/nike/thumb-10.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-11.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-12.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-13.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-14.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-15.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-16.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-17.jpg" width="317" height="176"></li>
			</ul>
			<ul class="slide slide-3 animate" anim-detached="true">
				<li><img src="images/nike/thumb-18.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-19.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-20.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-21.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-22.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-23.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-24.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-25.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-26.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-18.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-19.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-20.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-21.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-22.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-23.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-24.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-25.jpg" width="317" height="176"></li><li><img src="images/nike/thumb-26.jpg" width="317" height="176"></li>
			</ul>

			<div class="story">
				<div class="box"></div>
				<img class="logo animate" src="images/nike-logo.png" anim-detached="true" width="316" height="80" />
				<div>
					<h2>Page done for nike</h2>
					<h3>Some parallax</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula aliquam eros a tempus. Aenean sodales dictum augue, in faucibus nisi sollicitudin eu. Quisque et urna lacus, quis aliquam purus. Nulla semper arcu vel diam auctor condimentum. Nam molestie sem eu quam fermentum a tempus nisi aliquet. Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce nec ipsum ac mauris imperdiet luctus sed vitae ligula. Phasellus nec hendrerit neque.
					</p>
				</div>
			</div>
		</section>


		<section id="story-foo" anim-pause="500">
			<div class="story">
				<h2>Misc. Stuff</h2>
				<p>Some more parallax stuff.</p>
			</div>
		</section>
	</div>
</body>
</html>