<!doctype html>
<html>
<head>
   
<?php include('header.php'); ?>

<title>TraveLENS</title>
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
    <div class="parallax-window" data-parallax="scroll" data-image-src="images/travelenstheme2.png">

<?php include('fixed_navigation.php'); ?>

        <div class="container animated fadeInUp">
            <div class="titlename margin15">
                <p style="margin-top:20%">TraveLENS</p>
                <p style="font-size:1em">A travel data visualization that helps travelers and investors find goals.</p>
                <p><a class="btn btn-lg btn-default btn-align text-center" href="Final_Presentation_TraveLENS.pdf" role="button">Final Presentation</a>
                    <a class="btn btn-lg btn-default btn-align text-center" href="Resources/TraveLens_Group1_final3.pdf" role="button">Final Paper</a>
                </p>
            </div>
        </div>
    </div>

    <!--Summary-->
    <div class="margintop100">
<div class="container">
    <div class="bluearea">
        <div class="container">

            <div class="row margin15">
                <div class="col-md-3">
                    <h3>Team Role<i class="fa fa-fw fa-user"></i></h3>
                    <p>UX/UI Designer</p>
                </div>
                <div class="col-md-3">
                    <h3>Duration<i class="fa fa-fw fa-calendar-o"></i></h3>
                    <p>09/2014 - 12/2014</p>
                    <p>10 weeks</p>
                </div>
                <div class="col-md-3">
                    <h3>Methods<i class="fa fa-fw fa-book"></i></h3>
                    <p>Persona</p>
                    <p>Card sorting</p>
                </div>
                <div class="col-md-3">
                    <h3>Tools<i class="fa fa-fw fa-wrench"></i></h3>
                    <p>Axure</p>
                    <p>Visual C++</p>
                </div>
            </div>

        </div>
    </div>
</div>


    <div class="container" style="padding:15px">
        <!-- Detail -->

<div class="quote">
<blockquote>How can we use visualization to help global travelers pick destination?</blockquote></div>
        
    
        
        <div class="row margintop50">
          <div class="col-md-7" style="float: none; margin: 0 auto;">
TraveLENS is an interactive visualization tool that equips potential travellers with data and information across a wide range of risk factors that could influence in their decision-making process. It is designed to let the users see and explore the world through different categories of lenses depending on their tasks and goals, and the visualization is designed to adapt and morph to fit the requirements of each category and to present that category’s information in the most effective and expressive way.
        </div>
        </div>

               <img class="img-responsive " src="images/travelens_main_new.png" style="max-width: 100%;">

        
<h3 class="center">Video Demo</h3>
<div class="row">
    <div class="col-md-10 col-md-offset-1">
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/LTJxhb95Rgg" frameborder="0" allowfullscreen></iframe>
    </div>
    </div>
    </div> 
        
        <h3 class="nextproject ">Data Sets</h3>
        <hr class="featurette-divider">
        
        
         <div class="row featurette marginbottomtop30">
         <div class="col-md-5 vcenter">

             
             <ul>
            <li>World Economic Forum Travel and Tourism Competitiveness (2013)</li>
            <li>World Bank international tourist arrivals data (1995-2012)</li>
            <li>WikiTravel Data</li>
        </ul>

            </div>
            <div class="col-md-6 vcenter">
                <img class="featurette-image img-responsive" src="images/travelens_datasets.png" style='width:100%;'>
            </div>
        </div>
        
        <h3 class="nextproject ">Ideation</h3>
        <hr class="featurette-divider">
        <img class="img-responsive " src="images/travelens_ideation.jpg" style="max-width: 100%;">
        
        
        <h3 class="nextproject ">Design Process</h3>
        <hr class="featurette-divider">
        <h3>Round 1</h3>
              <img class="featurette-image img-responsive " src="images/travelens_round1wireframe.jpg" style="width: 800px; margin:0 auto; ">

        

        <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">
         <ul class="tablerow">
             <li class="tablecell">
                 <h3>Circular Bar Chart</h3>   
                <p>We categorized data into four sets: environment, travel cost, physical safety, and social. We then used a circular bar charts showing color-coded sets of data for whatever country selected by user.</p>
         </li>
          </ul>
            </div>
            <div class="col-md-6 vcenter">
                <img class="featurette-image img-responsive" src="images/travelens_circle.png" style='width:100%;'>
            </div>
        </div>
        
        <div class="row featurette marginbottomtop30">
            <div class="col-md-5 vcenter">
         <ul class="tablerow">
             <li class="tablecell">
                 <h3>Choropleth</h3>   
                <p>The choropleth serves as a heat map of the selected variable as well as a geographical navigation aid.</p>
         </li>
          </ul>
            </div>
            <div class="col-md-6 vcenter">
                <img class="featurette-image img-responsive" src="images/travelens_choropleth.png" style='width:100%;'>
            </div>
        </div>
        
        
            <h3>Usability Study</h3>

            <div class="row featurette">
            <div class="col-md-5">
                <h3>Key Findings</h3>
                    <ul>
                        <li>Participant was confused by the circular bar chart which was hard for comparison.</li>
                        <li>Participant preferred to have the average number shown for each indicator as a standard line.</li>
                    </ul>   
            </div>
            <div class="col-md-7"> 
                 <h3>Next Step</h3>
                    <ul>
                        <li>Find a visualization that is easier for comparison.</li>
                        <li>Add an line indicating the average number.</li>
                    </ul>   
                
                </div>
        </div>

</div>


        
        
        <div style="background-color: #F5F5F5;">
        <div class="container" style="padding:15px">
        <h3>Round 2</h3>   
        <img class="featurette-image img-responsive " src="images/travelens_round2wireframe.png" style="width: 800px; margin:0 auto; ">
        <div class="row featurette marginbottomtop30">
         
            
            <div class="col-md-5 vcenter">
                
                <h3>Parallel Coordinates</h3>
                <p>Parallel coordinates was chosen to support comparison across many dissimilar variables and correlate multiple variables simultaneously.</p>
            </div>
            <div class="col-md-6 vcenter">
                <img class="featurette-image img-responsive" src="images/travelens_designprocess_2_new.png" >
            </div>
        </div>
        
        <h3>Usability Study</h3>
        <div class="row featurette">
        <div class="col-md-5">
        <h3>Key Findings</h3>
        <ul>
        <li>Participants were not accustomed to parallel coordinates and tried to read them as trend lines.</li>
        <li>Switching between tabs was not intuitive and participants tended to neglect the whole functionality of parallel coordinates.</li>
        </ul>   
            </div>
            <div class="col-md-7"> 
                 <h3>Next Step</h3>
                    <ul>
                        <li>Address user unfamiliarity with parallel coordinates.</li>
                        <li>Combine two tabs into one.</li>
                    </ul>   
                
                </div>
        </div>
        </div>
    </div>

        <div class="container" style="padding:15px">
        <h3>Round 3</h3>   
        <img class="featurette-image img-responsive " src="images/travelens_round3wireframe.jpg" style="width: 800px; margin:0 auto; ">
        <div class="row featurette marginbottomtop30">
         
            
            <div class="col-md-5 vcenter">
                
                <h3>Integrated Main Tab</h3>
                <p>The parallel coordinates was presented under the main tab together with other plots. Brushing and linking was therefore empowered to generate more insights.</p>
            </div>
            <div class="col-md-6 vcenter">
                <img class="featurette-image img-responsive" src="images/travelens_integratedmaintab.png" >
            </div>
        </div>
        
          <div class="col-md-5 vcenter">
                
           <h3>Scatter Plot</h3>
           <p>The scatter plot serves as a correlation tool that contextualizes the selected variable against the baseline tourist arrivals data.</p>
            </div>
            <div class="col-md-6 vcenter">
                <img class="featurette-image img-responsive" src="images/travelens_scatterplot.png" >
            </div>


        <h3>Usability Study</h3>
        <div class="row featurette">
        <div class="col-md-5">
        <h3>Key Findings</h3>
        <ul>
        <li>The intrinsic tree structure of the data set was not realized by participants.</li>
        <li>Some values of indicators seemed to have an inverted relationship to the heatmap.</li>
        </ul>
        
            </div>
            <div class="col-md-7"> 
                 <h3>Next Step</h3>
                    <ul>
                        <li>Add indent to indicate tree structure; Added home icon to the top-level item; Added breadcrumbs in the title bar.</li>
                        <li>Correct the mistake, make high measure values show darker color values.</li>
                    </ul>   
                
                </div>
            <h3 class="center"><a class="btn btn-align btn-default btn-inline text-center" href="https://docs.google.com/spreadsheets/d/1hZ9p3uqg1Txh3ZzuQvzYabxcxmptKwmBWKaxs9i2HdI/edit?usp=sharing" target="_blank" role="button">Full Usability Testing Results</a></h3>
        </div>
        
        
        <h3 class="nextproject ">Final Product</h3>
        <hr class="featurette-divider">
        <img class="img-responsive " src="images/travelens_main_new.png" style="max-width: 100%;">
        <h3 class="center"><a class="btn btn-align btn-default btn-inline text-center" href="https://drive.google.com/file/d/0B3ZohE4IjwhkRkFtb2Nzc0FHTVE/view?usp=sharing" target="_blank" role="button">Try It Now (runs on Windows)</a></h3>


        
            <h3 class="bs-docs-featurette-title nextproject ">Reflection</h3>
            <hr class="featurette-divider">
            <div class="row featurette">
            <div class="col-md-5"> 
            <h3>What I Learned</h3>
            <ul>
            <li>Fancy visualizations are hard to interpret</li>
            <li>Getting actual data sets as early as possible, which helps a lot with narrowing down the scope and getting to know the limitations</li>
            </ul> 
                
            </div>
            <div class="col-md-7"> 
            <h3>Future Work</h3>
            <ul>
            <li>Longer timespan for important data dimensions</li>
            <li>Support detail investigation for cities</li>
            </ul> 
                </div>
        </div>




                <h3 class="bs-docs-featurette-title nextproject">Next Project</h3>
                <hr class="featurette-divider">

                <div class="row featurette onhover" onclick="location.href='smartponics.php';" style="cursor: pointer;">
                    <div class="col-md-5">
                        <img class="featurette-image img-responsive" src="images/smartponics.png" alt="Generic placeholder image" style="width: 100%; ">
                    </div>
                    <div class="col-md-7">
                        <h3 class="featurette-heading">SmartPonics <br><span class="text-muted">UX/UI Designer</span></h3>
                        <p>Platform: iOS</p>
                        <p>A self-control rooftop hydroponics garden with mobile control that helps people grow plants easily.</p>

                    </div>
                </div>
</div>
        
<?php include('footer.php'); ?>

</body>
</html>
