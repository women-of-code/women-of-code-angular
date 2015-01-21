/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

        	var widthofscreen = $(window).width();

$(window).load(function(){


        	if (widthofscreen > 990) { 
				//EqualHeights triggering via JS for viewports > 990px
			    $('.equal-height').setAllToMaxHeight();
			    $('.news-item').setAllToMaxHeight();
			    $('.about-content-split').setAllToMaxHeight();
	   
        	}

	   		else {
	   			//If EqualHeights are not being triggered, then Height is not fixed value. So we are removing '.valign' (vertical align) on all COL-* Elements (Bootstrap Columns) when viewed on viewports width < 990px
				$('.equal-height').find('.valign').removeClass('valign');
				$('.news-item').find('.valign').removeClass('valign');
				$('.about-content-split').find('.valign').removeClass('valign');
			}



});



$( window ).resize(function() {
	
			if (widthofscreen > 990) { 
				//EqualHeights triggering via JS for viewports > 990px
			    $('.equal-height').setAllToMaxHeight();
			    $('.news-item').setAllToMaxHeight();
			    $('.about-content-split').setAllToMaxHeight();
	   
        	}

	   		else {
	   			//If EqualHeights are not being triggered, then Height is not fixed value. So we are removing '.valign' (vertical align) on all COL-* Elements (Bootstrap Columns) when viewed on viewports width < 990px
				$('.equal-height').find('.valign').removeClass('valign');
				$('.news-item').find('.valign').removeClass('valign');
				$('.about-content-split').find('.valign').removeClass('valign');
			}

});
	
						
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	






  



	






  

