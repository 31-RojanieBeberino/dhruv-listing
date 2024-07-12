$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.nav-menu').toggleClass('open');
    });



    $('#grid').click(function() {
        $('.list').css('display', 'none');
        $('.grid').css('display', 'flex');
        $('.listing-map').css('width', '35%');
        $('.list-items').css('display', 'flex');
    });

    $('#list').click(function() {
        $('.grid').css('display', 'none');
        $('.list').css('display', 'block');
        $('.listing-map').css('width', '35%');
        $('.list-items').css('display', 'flex');
    });

    $('#map').click(function() {
        $('.grid').css('display', 'none');
        $('.list').css('display', 'none');
        $('.listing-map').css('width', '100%');
        $('.list-items').css('display', 'none');
    });



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