<!doctype html>
<html>

  <head>

    <?php include('header.php'); ?>

      <title>SmartPonics</title>
      <script>
        (function(i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date();
          a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-54877627-1', 'auto');
        ga('send', 'pageview');

      </script>

  </head>

  <body>
    <?php include('float_navigation.php'); ?>

      <!--Home image-->
      <div class="parallax-window" data-parallax="scroll" data-image-src="images/smartponicstheme2.jpg">

        <?php include('fixed_navigation.php'); ?>

          <div class="container animated fadeIn">
            <div class="titlename margin15">
              <p style="margin-top:20%">Family Circle (in progress)</p>
              <p style="font-size:1em">Connect distributed families better.</p>

            </div>
          </div>
      </div>

      <!--Summary-->
      <div class="margintop100">
        <div class="container">
          <div class="bluearea">

            <div class="row margin15">
              <div class="col-md-3">
                <h3>Team Role<i class="fa fa-fw fa-user"></i></h3>
                <p>UX/UI Designer</p>
              </div>
              <div class="col-md-3">
                <h3>Duration<i class="fa fa-fw fa-calendar-o"></i></h3>
                <p>01/2016 - Present</p>
              </div>
              <div class="col-md-3">
                <h3>Methods<i class="fa fa-fw fa-book"></i></h3>
                <p>User Research</p>
                <p>Persona</p>
                <p>Usability Testing</p>
              </div>
              <div class="col-md-3">
                <h3>Tools<i class="fa fa-fw fa-wrench"></i></h3>
                <p>Sketch</p>
                <p>Photoshop</p>
              </div>
            </div>

          </div>
        </div>

          <!-- Detail -->


        <div class="container">
          <div class="row margintop50">
            <div class="row featurette">
            <a class="example-image-link" href="images/fc-designquestion.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-designquestion.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

            <div class="col-md-7" style="float: none; margin: 0 auto; text-align: center">
Distributed families encounter challenges when connecting with family members across long distances. It is difficult to coordinate a time to talk when families encounter barriers of different time zones and schedules. Family members also hesitate to contact one another because of the possibility of reaching out at an inappropriate time (Neustaedter et al. 2013). Existing products (IM apps like iMessage and WhatsApp; direct text message or phone call; Online video chatting tools like Facetime and Skype,etc.) do not account for these issues and are not tailored specifically for distributed family members.
            </div>
          </div>

          <h3 class="bs-docs-featurette-title nextproject">User Research</h3>
          <hr class="featurette-divider">
          <div class="row featurette">
        
            <a class="example-image-link" href="images/fc-litreview-1.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-litreview-1.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

          <div class="row featurette">
            <a class="example-image-link" href="images/fc-litreview-2.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-litreview-2.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

          <div class="row featurette">
            <a class="example-image-link" href="images/fc-interview-1.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-interview-1.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

          <div class="row featurette">
            <a class="example-image-link" href="images/fc-interview-2.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-interview-2.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

          <div class="row featurette">
            <a class="example-image-link" href="images/fc-interview-3.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-interview-3.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

          <div class="row featurette">
            <a class="example-image-link" href="images/fc-designrequirement.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-designrequirement.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
          </div>

          <h3 class="bs-docs-featurette-title nextproject">Persona</h3>
          <hr class="featurette-divider">
        </div>
            <a class="example-image-link" href="images/fc-persona.png" data-lightbox="example-1"><img class="example-image img-responsive" src="images/fc-persona.png" alt="image-1" style="max-width: 100%; margin:0 auto" /></a>
         
         <div class="container">
          <h3 class="bs-docs-featurette-title nextproject">Ideation</h3>
          <hr class="featurette-divider">

         <div class="container">
          <h3 class="bs-docs-featurette-title nextproject">Next Project</h3>
          <hr class="featurette-divider">

          <div class="row featurette onhover" onclick="location.href='qqbrowser.php';" style="cursor: pointer;">
            <div class="col-md-5">
              <img class="featurette-image img-responsive" src="images/qqbrowser.png" alt="Generic placeholder image" style="width: 100%; ">
            </div>
            <div class="col-md-7">
              <h3 class="featurette-heading">QQ Browser <br><span class="text-muted">Product Manager</span></h3>
              <p>A top-ranked mobile browser run on Android platform designed specifically for Chinese users, had over 30 million daily active users.</p>

            </div>
          </div>
        </div>
        <?php include('footer.php'); ?>

  </body>

</html>
