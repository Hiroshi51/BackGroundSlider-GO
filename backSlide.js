 /*******************************************************************
  * Name   : BackgroundSlider GO
  * Author : Hiroshi51
  * ver    : 1.0.1 
  *******************************************************************/
(function ( $ ) {
	
$.fn.BackgroundSliderGO = function(settingOption) {
	
     //extend setting with settingOption
	var setting = $.extend({          
		"imgNumber1"    : 1,
		"imgNumber2"    : 1, 
		"NumberOfImgs"  : 5,  
		"loop"          : 0, 
        "fadeSpeed"     : 2000,   
		"imgDirectory"  : 'img/slide/',    
        "afterloop"     : false    
		},settingOption);
  
    //Defalut img Url
    var DefaultfadeimgUrl = 'url('+setting.imgDirectory+'wall1.jpg)';
    var DefaultbackImgUrl = 'url('+setting.imgDirectory+'wall2.jpg)';
  
    //add fadeImg layer and backImg layer
    this.append("<div id=\"fadeImg\"></div>");
	$("#fadeImg").css("background-image",DefaultfadeimgUrl);
    this.hide();
    this.fadeIn(setting.fadeSpeed);      
    this.append("<div id=\"backImg\"></div>");   
	$("#backImg").css("background-image",DefaultbackImgUrl);   //fade in the first img
    setTimeout(function(){fadeOutImg();},5000);                //wait for 5000ms, call addNextbackImg();

    //fadeOut the first img
	function fadeOutImg(){
	   $("#fadeImg").fadeOut(setting.fadeSpeed);
       setTimeout(function(){changeFadeImg();},5000);         
    };

    //change the first img and fade In again
    function changeFadeImg(){
       setting.imgNumber1 += 2;
	   if(setting.imgNumber1 > setting.NumberOfImgs){
		     setting.imgNumber1 = setting.NumberOfImgs;
	   }
    var nextImageUrl = 'url('+setting.imgDirectory+'wall'+setting.imgNumber1+'.jpg)';
	console.log(nextImageUrl);
	   $("#fadeImg").css("background-image",nextImageUrl);
       $("#fadeImg").fadeIn(setting.fadeSpeed);
	   setTimeout(function(){changebackImg();},5000);	
    };

    //change the back img 
    function changebackImg(){
	   setting.imgNumber2 += 2 
       if(setting.imgNumber2 > setting.NumberOfImgs || setting.imgNumber1 == setting.NumberOfImgs){
	    	setting.imgNumber1 = 0;
		    setting.imgNumber2 = 1;
	   }
       var nextImageUrl = 'url('+setting.imgDirectory+'wall'+setting.imgNumber2+'.jpg)';
       $("#backImg").css("background-image",nextImageUrl);
       setTimeout(function(){fadeOutImg();},1000);	
    };
    return this;
    }; 
	
}( jQuery ));
