jQuery(document).ready(function() {


    jQuery('.home-banner-slider').owlCarousel({
      center: false,
      loop: true,
      nav: false,
      dots: false,
      autoplay:true,
      autoplayTimeout:5000,
      pagination:false,
      margin: 0,
      stagePadding: 0,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
     
        },
        600: {
          items: 1,
          stagePadding: 0,
          
        },
        1000: {
          items: 1,
          stagePadding: 0
        }
      }
    });
    

    jQuery('.work-slider').owlCarousel({
        center: false,
        loop: false,
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        pagination:false,
        margin: 20,
        stagePadding: 0,
        responsive: {
          0: {
            items: 1,
            stagePadding: 0,
            
          },
          600: {
            items: 2,
            stagePadding: 0,
            
          },
          1000: {
            items: 3,
            stagePadding: 0
          }
        }
      });


      jQuery('.featured-works-slider').owlCarousel({
        center: false,
        loop: true,
        nav: false,
        dots: false,
        autoplay:true,
        pagination:false,
        margin: 30,
        responsive: {
          0: {
            items: 1,
            stagePadding: 0,
            dots: true
          },
          600: {
            items: 2,
            stagePadding: 0,
            dots: true
          },
          1000: {
            items: 3,
            stagePadding: 60
          }
        }
      });

     


  });


  jQuery(document).ready(function() {
    //Horizontal Tab
    jQuery('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var  jQuerytab =  jQuery(this);
            var  jQueryinfo =  jQuery('#nested-tabInfo');
            var  jQueryname =  jQuery('span',  jQueryinfo);
            jQueryname.text( jQuerytab.text());
            jQueryinfo.show();
        }
    });



});