<!doctype html>
<html>

  <head>

    <?php include('header.php'); ?>

      <!--Blue Image Gallery-->

      <title>Ruiyi Zhou | UX/UI Designer</title>
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
      <script src="js/jquery.lazyload.js"></script>

<script>
      // Display an info toast with no title
toastr.info('Hi there! Check out my new Medium story!')
</script>
  </head>

  <body>
    <?php include('float_navigation.php'); ?>

      <!--Home image-->
      <div class="parallax-window" data-parallax="scroll" data-image-src="images/me.jpg">

        <?php include('fixed_navigation.php'); ?>

          <div class="container animated fadeIn">
            <div class="titlename margin15">
              <p style="margin-top:20%;">Hi, I'm Ruiyi Zhou.</p>
              <p style="font-size:16px;">UX/UI Designer | With additional experience in product management and front-end development.</p>
              <p>
                <a class="btn btn-lg btn-default btn-align text-center" href="#portfolio">See My Projects</a>

              </p>

            </div>
          </div>
      </div>

      <!-- Three columns-->
      <section id="expertise">
        <div class="bluearea">
          <div class="container">
            <div class="margin15">
              <h3 class="bs-docs-featurette-title nextproject ">Expertise</h3>

              <hr class="featurette-divider"> &nbsp; &nbsp;
              <div class="row text-center ">

                <div class="col-lg-4">
                  <img class="img-circle center" src="images/design.png" alt="Generic placeholder image" style="width: 100px; height: 100px;">

                  <h3>UX/UI Design</h3>
                  <p>I'm currently a full-time MS student at Human Centered Design and Engineering at University of Washington.</p>
                </div>
                <!-- /.col-lg-4 -->
                <div class="col-lg-4">
                  <img class="img-circle" src="images/productmanager.png" alt="Generic placeholder image" style="width: 100px; height: 100px;">
                  <h3>Product Management</h3>
                  <p>3-year experience working as a product manager. I'm familiar with agile development and scrum.</p>
                </div>
                <!-- /.col-lg-4 -->
                <div class="col-lg-4">
                  <img class="img-circle" src="images/coding.png" alt="Generic placeholder image" style="width: 100px; height: 100px;">
                  <h3>Front-end Development</h3>
                  <p>2-year experience in front-end development. I'm comfortable with HTML/CSS and jQuery.</p>
                </div>
                <!-- /.col-lg-4 -->
              </div>
              <!-- /.row -->
            </div>
          </div>

          &nbsp; &nbsp;
        </div>
      </section>
      <!-- Portfolio -->
      &nbsp; &nbsp; &nbsp; &nbsp;
      <section id="portfolio">
        <div class="container">
          <div class="margin15">
            <h3 class="bs-docs-featurette-title nextproject ">Portfolio</h3>

            <hr class="featurette-divider">
              
           <div class="row featurette onhover opacity" onclick="location.href='familycircle.php';" style="cursor: pointer;">

              <div class="col-md-5">
                <img class="featurette-image img-responsive " src="images/familycircle.png" alt="Generic placeholder image" style="width: 100%;">
              </div>


              <div class="col-md-7">
                <h3 class="featurette-heading ">Family Circle <i class="fa fa-fw fa-mobile"></i> <br><span class="text-muted">Cross-Platform software</span></h3>
                <p>Connect distributed families better.</p>

              </div>


            </div>

            <div class="row featurette onhover opacity" onclick="location.href='glassdoor.php';" style="cursor: pointer;">

              <div class="col-md-5">
                <img class="featurette-image img-responsive " src="images/glassdoor.png" alt="Generic placeholder image" style="width: 100%;">
              </div>


              <div class="col-md-7">
                <h3 class="featurette-heading ">Glassdoor <i class="fa fa-fw fa-desktop"></i> <br><span class="text-muted">B2B Employer Center</span></h3>
                <p>An online community to help you find a job and company you love.</p>

              </div>


            </div>

            <div class="row featurette onhover opacity" onclick="location.href='farestart.php';" style="cursor: pointer;">
              <div class="col-md-5">
                <img class="featurette-image img-responsive " src="images/farestart.png" alt="Generic placeholder image" style="width: 100%; ">
              </div>
              <div class="col-md-7">
                <h3 class="featurette-heading">FareStart <i class="fa fa-fw fa-desktop"></i> <i class="fa fa-fw fa-mobile"></i><br><span class="text-muted">Responsive Website</span></h3>
                <p>Redesign the website of a non-profit, social organization in Seattle..</p>

              </div>
            </div>


            <div class="row featurette onhover opacity" onclick="location.href='travelens.php';" style="cursor: pointer;">

              <div class="col-md-5">
                <img class="featurette-image img-responsive " src="images/travelens.png" alt="Generic placeholder image" style="width: 100%;">
              </div>


              <div class="col-md-7">
                <h3 class="featurette-heading ">TraveLENS <i class="fa fa-fw fa-windows"></i><br><span class="text-muted">Data Visualization</span></h3>

                <p>A travel data visualization that helps travelers and investors find their goals.</p>

              </div>


            </div>


            <div class="row featurette onhover opacity" onclick="location.href='smartponics.php';" style="cursor: pointer;">
              <div class="col-md-5">
                <img class="featurette-image img-responsive " src="images/smartponics.png" alt="Generic placeholder image" style="width: 100%; ">
              </div>
              <div class="col-md-7">
                <h3 class="featurette-heading">SmartPonics <i class="fa fa-fw fa-apple"></i><br><span class="text-muted">iOS App</span></h3>
                <p>A self-control rooftop hydroponics garden with mobile control that helps people grow plants easily.</p>

              </div>
            </div>


            <div class="row featurette onhover opacity" onclick="location.href='qqbrowser.php';" style="cursor: pointer;">
              <div class="col-md-5">
                <img class="featurette-image img-responsive " src="images/qqbrowser.png" alt="Generic placeholder image" style="width: 100%; ">
              </div>
              <div class="col-md-7">
                <h3 class="featurette-heading">QQ Browser  <i class="fa fa-fw fa-android"></i><br><span class="text-muted">iOS and Android App</span></h3>
                <p>A top-ranked mobile browser designed specifically for Chinese users, had over 30 million daily active users.</p>

              </div>

            </div>

          </div>
      </section>


      <section id="whatelse">

        <div class="container">
          <div class="margin15">
            <h3 class="bs-docs-featurette-title nextproject ">I'm also a(n)</h3>

            <hr class="featurette-divider"> &nbsp; &nbsp;
            <div class="row text-center ">

              <div class="col-lg-4">
                <img class="img-circle" src="images/avidreader.png" alt="avid reader" style="width: 100px; height: 100px;">
                <h3>Avid Reader</h3>
              </div>
              <!-- /.col-lg-4 -->

              <div class="col-lg-4">
                <img class="img-circle center" src="images/selftaughteconomist.png" alt="self-taught economist" style="width: 100px; height: 100px;">

                <h3>Self-taught Economist</h3>
              </div>
              <!-- /.col-lg-4 -->

              <div class="col-lg-4">
                <img class="img-circle" src="images/halfbloodgeek.png" alt="half-blood geek" style="width: 100px; height: 100px;">
                <h3>Half-blood Geek</h3>
              </div>
              <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
          </div>
        </div>

        &nbsp; &nbsp;
      </section>

      <section id="What's New">
        <div class="container">
          <div class="margin15">


            <h3 class="bs-docs-featurette-title nextproject ">Book Gallery</h3>
            <hr class="featurette-divider">

            <div class="row">

              <a class="example-image-link" href="images/books/mobilefirst.png" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/mobilefirst.png" alt="image-1" /></a>

              <a class="example-image-link" href="images/book_madetostick.jpeg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/book_madetostick.jpeg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1442616448l/41597.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1442616448l/41597.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1333124707l/13539381.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1333124707l/13539381.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1410138134l/10639.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1410138134l/10639.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/book_awholenewmind.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/book_awholenewmind.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1347488145l/6659874.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1347488145l/6659874.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1404576602l/13099738.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1404576602l/13099738.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1347329018l/980280.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1347329018l/980280.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1365396257l/6157547.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1365396257l/6157547.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1328834536l/336258.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1328834536l/336258.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1387739935l/19904558.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1387739935l/19904558.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1388211043l/68143.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1388211043l/68143.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1266606574l/646060.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1266606574l/646060.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1366758683l/12609433.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1366758683l/12609433.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="https://d.gr-assets.com/books/1387365289l/18324256.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="https://d.gr-assets.com/books/1387365289l/18324256.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/nowyouseeit.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/nowyouseeit.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/measuringtheuserexperience.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/measuringtheuserexperience.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/handbookofusabilitytesting.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/handbookofusabilitytesting.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/godelescherbach.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/godelescherbach.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/freakonomics.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/freakonomics.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/thetippingpoint.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/thetippingpoint.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/leanux.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/leanux.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/designinginterfaces.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/designinginterfaces.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/designingmulti-deviceexperiences.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/designingmulti-deviceexperiences.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/notbychancealone.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/notbychancealone.jpg" alt="image-1" /></a>

              <a class="example-image-link" href="images/books/businessmodelgeneration.jpg" data-lightbox="example-1"><img class="example-image small75 lazy" src="images/books/businessmodelgeneration.jpg" alt="image-1" /></a>

            </div>

          </div>
        </div>
      </section>


      &nbsp;



      <?php include('footer.php'); ?>

        <script>
          $(function() {
            $("img.lazy").lazyload();
          });

        </script>

        <!--LazyLoad-->

  </body>

</html>
