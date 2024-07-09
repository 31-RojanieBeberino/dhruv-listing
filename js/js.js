$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.nav-menu').toggleClass('open');
    })



    var navbar = $('#navbar');
    var sticky = navbar.offset().top;

    $(window).scroll(function() {
        if (window.pageYOffset >= sticky) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });
});