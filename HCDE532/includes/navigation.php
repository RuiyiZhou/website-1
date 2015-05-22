<?php $page = basename($_SERVER['SCRIPT_NAME']) ?>

<!-- Begin Navigation -->
<div id="navigation">
<ul id="navigation-items">
<li <?php if ($page == 'about.php') { echo 'class="current"'; } ?>><a href="about.php">About</a></li>
<li <?php if ($page == 'portfolio.php') { echo 'class="current"'; } ?>><a href="portfolio.php">Portfolio</a></li>
<li <?php if ($page == 'blog.php') { echo 'class="current"'; } ?>><a href="blog.php">Blog</a></li>
<li <?php if ($page == 'contact.php') { echo 'class="current"'; } ?>><a href="contact.php">Contact</a></li>
</ul>
</div>
<!-- End Navigation -->