<!doctype html>
<html>

  <head>

    <?php include('header.php'); ?>

      <title>Glassdoor</title>
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
      <div class="parallax-window" data-parallax="scroll" data-image-src="images/glassdoortheme.jpg">

        <?php include('fixed_navigation.php'); ?>

          <div class="container animated fadeIn">
            <div class="titlename margin15">
              <p style="margin-top:20%">Glassdoor</p>
              <p style="font-size:1em">An online community to help you find a job and company you love.</p>

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
                <p>UX/UI Design Intern</p>
              </div>
              <div class="col-md-3">
                <h3>Duration<i class="fa fa-fw fa-calendar-o"></i></h3>
                <p>06/2015 - 09/2015</p>
                <p>3 months</p>
              </div>
              <div class="col-md-3">
                <h3>Methods<i class="fa fa-fw fa-book"></i></h3>
                <p>Heuristic Evaluation</p>
                <p>Wireframing</p>
                <p>Prototyping</p>
                <p>Data Analysis</p>
              </div>
              <div class="col-md-3">
                <h3>Tools<i class="fa fa-fw fa-wrench"></i></h3>
                <p>Sketch</p>
                <p>Google Analytics</p>
                <p>jQuery</p>
                <p>proto.io</p>
              </div>
            </div>

          </div>

          <!-- Detail -->

          <div class="row margintop50">

            <div class="quote">
              <blockquote>
                <p>Ruiyi is smart, thoughtful, and enthusiastic in his work. He was able to accomplish more than we’d expected of an intern and was always eager to take on additional projects.</p>
                <br/> &nbsp;
                <br/>
                <p>- Jennifer, UX Lead, B2B at Glassdoor</p>
              </blockquote>
            </div>

            <div class="col-md-7" style="float: none; margin: 0 auto; text-align: center">
              <p>This is a brief summary of what I’ve done in this internship. The projects I’ve done are categorized into five sections: design, analysis, prototype, user research, and pattern library. Certain mockups are not included due to NDA.</p>
            </div>
          </div>



          <h3 class="nextproject">Design</h3>

          <hr class="featurette-divider">
          <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">

              <h3>Data Visualization</h3>
              <p>Employer Center is the <b>B2B</b> site to connect the employers with the potential candidates. I redesigned the <b>data visualization</b> pages on the Employer Center site to <b> increase the usability </b> and <b> reduce the potential confusion </b> caused by visualizations. One of the challenges was to design specifically for the user group of the EC
                site: <b> people-driven </b> HRs, hiring managers, etc., who didn’t necessarily have a technical background, so might be easily confused by fancy visualizations like small multiples or scatter plots.</p>

            </div>
            <div class="col-md-6 vcenter">
           <img class="example-image img-responsive" src="images/glassdoor-viz.png" style="max-width: 100%; margin:0 auto" />


            </div>
           <img class="example-image img-responsive" src="images/glassdoor_dataviz.png" alt="image-1" style="max-width: 100%; margin:0 auto" />
          </div>

        </div>
        <div style="background-color: #e7f2d6;">
          <div class="container">

            <div class="row featurette marginbottomtop30">
              <div class="col-md-5 vcenter">

                <h3>The Activity Stream</h3>
                <p>For the smaller business especially, the data presented on the data visualization pages wouldn't change frequently due to the limited amount of their visitors. So users from these smaller business were less motivated to come back now and
                  then. The challenge here was to <b>increase the active user rate</b>. Another more broad question was to <b>humanize the numbers</b>, which would benefit both large and small business.</p>


              </div>
              <div class="col-md-6 vcenter">
                <img class="example-image img-responsive" src="images/glassdoor-as.png" alt="image-1" style="max-width: 100%; margin:0 auto" />
              </div>


              <img class="example-image img-responsive" src="images/glassdoor_activitystream.png" alt="image-1" style="max-width: 80%; margin:0 auto" />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">

              <h3>The OpenCompany Module</h3>
              <p>I redesigned a small but a pretty important module on the EC site homepage - the <b>OpenCompany</b> module - which is a certification that Glassdoor offers to encourage companies to be more responsive to their reviews and better interact
                with their profile viewers.
              </p>

            </div>

            <div class="col-md-6 vcenter">
             <img class="example-image img-responsive" src="images/glassdoor_opencompany.png" alt="image-1" style="max-width: 100%; margin:0 auto" />
            </div>
            <img class="example-image img-responsive" src="images/glassdoor_opencompanyrule.png" alt="image-1" style="max-width: 100%; margin:0 auto" />
          </div>


          <h3 class="nextproject">Analysis</h3>

          <hr class="featurette-divider">
          <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">
              <ul class="tablerow">
                <li class="tablecell">


                  <p>I analyzed the error message of surveys using <b>Google Analytics</b> data to get an idea where and how users might be confused and make errors. Surveys are super crucial in that they influence how many reviews we get, and how good these
                    reviews are in terms of quality.</p>

                  <p>I also conducted a <b>heuristic evaluation</b> of these pages, and wrote a report about the potential usability issues these surveys have. After several rounds of refinements, it’s getting better and better, but still there is a space
                    to improve.</p>
                </li>
              </ul>
            </div>
            <div class="col-md-6 vcenter">
              <img class="example-image img-responsive" src="images/glassdoor-survey.png" alt="image-1" style="max-width: 100%; margin:0 auto"/>

            </div>
          </div>


          <h3 class="nextproject">Prototype</h3>
          <hr class="featurette-divider">
          <div class="row featurette marginbottomtop30">

            <p>I built several interactive prototypes, using proto.io or manually coding. <b> Proto.io </b> is a quick way to build interactive prototype, but still limited. Prototypes built by coding could better mimic the real web pages and apps. Below is a fully
              interactive prototype of the Job Slots Management I built using <b> HTML/CSS and jQuery </b>.</p>

            <img style="max-width: 100%; margin:0 auto" src="images/glassdoor_jobslot.gif"></img>

            <h3 class="center"><a class="btn btn-align btn-default btn-inline text-center" href="JobSlotManagement/index.html" target="_blank" role="button">Try It Now</a></h3>

          </div>

          <h3 class="nextproject">User Research</h3>
          <hr class="featurette-divider">
          <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">
              <h3>Job Search User Journey Map</h3>
              <p>Jobs. Jobs. Jobs. It’s all about jobs. The current user flow of job searching and application was not optimal. To start optimizing it, I worked to put together the <b> user journey map </b> and then called out the bad experience. I also conducted
               <b> competitive analysis </b> to evaluate the experience of using main competitors's products.</p>
            </div>
            <div class="col-md-6 vcenter">
              <img class="example-image img-responsive" src="images/glassdoor-userflow.jpg" alt="image-1" style="max-width: 100%; margin:0 auto" />

            </div>
          </div>

          <h3 class="nextproject">Pattern Library</h3>
          <hr class="featurette-divider">
          <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">
              <p>Started with putting together all the day selectors we were now using, I designed a <b>day selector pattern</b> that could be reused across the whole site. While designing this, I ran into some issues that I haven’t thought about. Trying
                to tackle on each of them was a great learning process. This <b>Medium article</b> is a brief summary of the issues I've dealt with.
              </p>

            </div>
            <div class="col-md-6 vcenter">
              <script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@ruiyizhou/how-to-build-an-ideal-day-selector-637fa3fca236">How to Build an Ideal Day Selector</a>
            </div>
          </div>

              <h3 class="bs-docs-featurette-title nextproject ">Reflection</h3>
              <hr class="featurette-divider">
              <div class="row featurette">
                <div class="col-md-5">
                  <h3>What I've Learned</h3>
                  <ul>
                    <li>The whole design process needs to be tailored to fit specific projects</li>
                    <li>The skill to articulate design decisions is crucial</li>
                    <li>Data-driven design starts will goals, not data</li>
                  </ul>

                </div>
                <div class="col-md-7">
                  <h3>What Else</h3>
                  <ul>
                    <li>San Francisco is cold at night, even in summer</li>
                  </ul>
                </div>
              </div>

          <h3 class="bs-docs-featurette-title nextproject">Next Project</h3>
          <hr class="featurette-divider">




          <div class="row featurette onhover opacity" onclick="location.href='farestart.php';" style="cursor: pointer;">
            <div class="col-md-5">
              <img class="featurette-image img-responsive " src="images/farestart.png" alt="Generic placeholder image" style="width: 100%; ">
            </div>
            <div class="col-md-7">
              <h3 class="featurette-heading">FareStart <br><span class="text-muted">UX Designer</span></h3>
              <p>Redesign the FareStart website.</p>

            </div>
          </div>
        </div>

        <?php include('footer.php'); ?>

  </body>

</html>
