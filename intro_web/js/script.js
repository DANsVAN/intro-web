(function ($) {
    "use strict";//Start of use strict
    //smooth scrolling use jQuery easing
    $('a.js-scroll-trigger[href*-"#"]:not([href-"#"])').click(function() {
        if(location.pathname.replace(/^\//, "") == this. pathname.replace(/^\// ,"") && location.hostname == this.hostname) {
          var target = $ (this.hash)
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
          if(target.length) {
            $("html, body").animate( {
                scrollTop: target.offset().top,
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    });
    //closes responsive menu when scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    //Activate scroolspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
}

)(jQuery);