# BackGroundSlider-GO

This is a simple BackGroundSlide jQuery Plug in.
You can modify this plugin in very flexible way. I especially recommend that you use this to create a dynamic full page background.
please read the instruction below.

### step1
prepare images named 
wall1.jpg
wall2.jpg
wall3.jpg
.
.
.
numbers at the ends must be serial. Not like 01,02,03 but 1,2,3,4.... Sorry a bit annoying though.

### step2
in your html, between head tag, add the code below

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="backSlide.js"></script>

well, jQuery can be some other versiton, but 1.12.0 or above is tested version.


### step3
link the css in head tag

    <link rel="stylesheet" href="style.css" type="text/css" />


### step4
call the function like below

    $(document).ready(function(){
    $("#slide").BackgroundSliderGO({
        "NumberOfImgs"     : 5,            //NumberOfPictures Caution! It must be more than or equal to 2 and up to the       number of images in the folder 
        "fadeSpeed"        : 2000,         //fadeIn-Out Speed
		"imgDirectory"     : 'img/slide/', //the path to the slideImages folder. Dont foget "/" at the end
		});
    });

### step5
create div with the ID "slide"

    <div id="slide">

      <div id="content">
       <!-- your content is here --> 
        <h1>This is GoBackgroundSlide</h1>
        <p>Hi, with this Jquery Script, you can easily simply modify the background slideShow to make your website more interactive 
       <!-- your content is here --> 
      </div>
  
      <!-- cover the whole slide with transparet blackMask --> 
      <div id="blackMask">.</div>
      <!-- cover the whole slide with transparet blackMask --> 
  
    </div>
