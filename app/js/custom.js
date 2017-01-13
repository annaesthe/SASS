$(function() {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
           
            $('#main-nav').addClass('scroll');
            
    } else {
        
            $('#main-nav').removeClass('scroll');
         }
        
    });
    
    var root = $('body');
    
    $('a[href^="#"]').click(function () {
        var href = $.attr(this, 'href');
        root.animate({ scrollTop: $(href).offset().top -52}, 500);
    })
     
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.row'), {delay: 1550};
    sr.reveal('h1, h2, h3', {delay: 400});
});

$(function() {

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });


    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


//
//$().ready(function() {
//    var sName = "cookiesok";
//    $("#close-cookie-warn").click(function(){
//        var oExpire = new Date();
//        oExpire.setTime((new Date()).getTime() + 3600000*24*365);
//        document.cookie = sName + "=1;expires=" + oExpire;
//        $("#cookie-warn").hide("slow");
//    });
// 
//    var sStr = '; '+ document.cookie +';';
//    var nIndex = sStr.indexOf('; '+ escape(sName) +'=');
//    if (nIndex === -1) {
//        $("#cookie-warn").show();
//    }
//});