jQuery(function () {
              jQuery(window).scroll(function () {
                if (jQuery(this).scrollTop() > 400) {
                 $("#header").addClass("headerGradientt"); 
                } else {
                 $("#header").removeClass("headerGradientt");
                 
                }
              });
            });