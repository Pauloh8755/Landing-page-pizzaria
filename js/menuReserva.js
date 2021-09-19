jQuery(function () {
              jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > 80) {
                 $("#header").addClass("headerGradientt"); 
                } else {
                 $("#header").removeClass("headerGradientt");
                 
                }
              });
            });