$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.nav-menu').toggleClass('open');
        $(this).toggleClass('open');
    });


    $('.menuList').click(function(){
        $('.menu-dropdown').toggleClass('menuDP-Mobile');
    });


    // $('.prop-type').click(function(){
    //     $('.prop-list').addClass('active');
    //     $('.prop-type').addClass('prop-type-active');
    // });


    // $('.prop-type').click(function(event){
    //     event.stopPropagation(); // Prevent the click event from propagating to the document
    //     $('.prop-list').addClass('active');
    //     $('.prop-type').addClass('prop-type-active');
    // });

    // $(document).click(function(event) {
    //     if (!$(event.target).closest('.prop-type, .prop-list').length) {
    //         // Remove the .active and .prop-type-active classes
    //         $('.prop-list').removeClass('active');
    //         $('.prop-type').removeClass('prop-type-active');
    //     }
    // });


   

    $('#grid').click(function() {
        $('.list').css('display', 'none');
        $('.grid').css('display', 'flex');
        $('.listing-map').css('width', '35%');
        $('.list-items').css('display', 'flex');
        $('.listing-map iframe').css('position', 'absolute');
        $('.map-toggle img').css('display', 'block');
        $('.pagination').css('display', 'flex');
    });

    $('#list').click(function() {
        $('.grid').css('display', 'none');
        $('.list').css('display', 'block');
        $('.listing-map').css('width', '35%');
        $('.list-items').css('display', 'flex');
        $('.listing-map iframe').css('position', 'absolute');
        $('.map-toggle img').css('display', 'block');
        $('.pagination').css('display', 'none');
    });

    $('#map').click(function() {
        $('.grid').css('display', 'none');
        $('.list').css('display', 'none');
        $('.listing-map').css('width', '100%');
        $('.list-items').css('display', 'none');
        $('.listing-map iframe').css('position', 'relative');
        $('.map-toggle img').css('display', 'none');
        $('.pagination').css('display', 'none');
    });



    $('.map-toggle img').click(function(){
        $('.listing-map iframe').toggleClass('closeMap');
        $('.listing-map').toggleClass('closeMap');
        $('.list-items').toggleClass('list-itemmapClose');
        $('.list-item').toggleClass('list-itemMapClose');
        $('.map-toggle img').toggleClass('mapImg');
        $('.card-items.grid').toggleClass('card-items-grid-Active');
    });

    const itemsPerPage = 6;
    const $items = $('.list-item');
    const totalItems = $items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function showPage(pageNumber) {
        $items.hide();
        $items.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage).show();
    }

    function createPagination() {
        const $pagination = $('.pagination');
        $pagination.empty(); // Clear existing pagination
        for (let i = 1; i <= totalPages; i++) {
            const $btn = $('<button>')
                .addClass('pagination-btn')
                .attr('data-page', i)
                .text(i);
            $pagination.append($btn);
        }
    }

    function updatePagination(currentPage) {
        $('.pagination-btn').removeClass('active');
        $(`.pagination-btn[data-page="${currentPage}"]`).addClass('active');
    }

    // Initialize pagination
    createPagination();
    showPage(1); // Show first page initially

    // Handle pagination button clicks
    $(document).on('click', '.pagination-btn', function() {
        const pageNumber = $(this).data('page');
        showPage(pageNumber);
        updatePagination(pageNumber);
    });

    // Optional: Adjust layout for mobile screens
    $(window).on('resize', function() {
        // Example: Reinitialize or adjust pagination if needed
    });




    // const itemsPerPage = 4;
    // const $items = $('.list-item');
    // const totalItems = $items.length;
    // const totalPages = Math.ceil(totalItems / itemsPerPage);

    // function showPage(pageNumber) {
    //     $items.hide();
    //     $items.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage).show();
    // }

    // function createPagination() {
    //     const $pagination = $('.pagination');
    //     for (let i = 1; i <= totalPages; i++) {
    //         const $btn = $('<button>')
    //             .addClass('pagination-btn')
    //             .attr('data-page', i)
    //             .text(i);
    //         $pagination.append($btn);
    //     }
    // }

    // function updatePagination(currentPage) {
    //     $('.pagination-btn').removeClass('active');
    //     $(`.pagination-btn[data-page="${currentPage}"]`).addClass('active');
    // }

    // // Initialize pagination
    // createPagination();
    // showPage(1); // Show first page initially

    // // Handle pagination button clicks
    // $(document).on('click', '.pagination-btn', function() {
    //     const pageNumber = $(this).data('page');
    //     showPage(pageNumber);
    //     updatePagination(pageNumber);
    // });



    // $('.carousel').each(function() {
    //     let $carousel = $(this);
    //     let $inner = $carousel.find('.carousel-inner');
    //     let $items = $carousel.find('.carousel-item');
    //     let totalSlides = $items.length;
    //     let slideIndex = 0;

    //     function updateSlidePosition() {
    //         let newTransformValue = -slideIndex * 100 / totalSlides;
    //         $inner.css('transform', `translateX(${newTransformValue}%)`);
    //     }

    //     $carousel.find('.next').click(function() {
    //         slideIndex = (slideIndex + 1) % totalSlides;
    //         updateSlidePosition();
    //     });

    //     $carousel.find('.prev').click(function() {
    //         slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    //         updateSlidePosition();
    //     });

    //     updateSlidePosition();
    // });



    function initializeCarousel($carousel) {
        let $inner = $carousel.find('.carousel-inner');
        let $items = $carousel.find('.carousel-item');
        let totalSlides = $items.length;
        let slideIndex = 0;

        function updateSlidePosition() {
            let newTransformValue = -slideIndex * 100 / totalSlides;
            $inner.css('transform', `translateX(${newTransformValue}%)`);
        }

        function updateTotalSlides() {
            $items = $carousel.find('.carousel-item');
            totalSlides = $items.length;
        }

        $carousel.find('.next').off('click').on('click', function() {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlidePosition();
        });

        $carousel.find('.prev').off('click').on('click', function() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        });

        $carousel.on('DOMNodeInserted DOMNodeRemoved', function() {
            updateTotalSlides();
            if (slideIndex >= totalSlides) {
                slideIndex = totalSlides - 1;
            }
            updateSlidePosition();
        });

        updateSlidePosition();
    }

    $('.carousel').each(function() {
        initializeCarousel($(this));
    });





    // $(".owl-carousel").owlCarousel({
    //     items: 1, // Number of items to display at once
    //     loop: true, // Loop through items
    //     nav: true, // Enable next/prev navigation
    //     dots: false, // Disable pagination
    //     navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"] // Custom icons for navigation
    //   });





    $('.mainSlider').slick({
        dots: false, // Disable pagination
        infinite: true, // Infinite looping
        speed: 300, // Transition speed
        slidesToShow: 1, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        prevArrow: "<button type='button' class='slick-prev'><i class='fa fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='fa fa-chevron-right'></i></button>"
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



// const dropdowns = document.querySelectorAll('.prop-type');


// dropdowns.forEach(dropdown => {
//     const select = dropdown.querySelector('.prop-name');
//     const chevo = dropdown.querySelector('.chevo');
//     const menuOpt = dropdown.querySelector('.prop-list');


//     select.addEventListener('click', () =>{
//         menuOpt.classList.toggle('prop-list-active');
//         chevo.classList.toggle('chevo-active');
//     })
// })



const dropdowns = document.querySelectorAll('.prop-type');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.prop-name');
    const chevo = dropdown.querySelector('.chevo');
    const menuOpt = dropdown.querySelector('.prop-list');

    select.addEventListener('click', () => {
        // Close all active dropdowns
        dropdowns.forEach(dd => {
            if (dd !== dropdown) {
                dd.querySelector('.prop-list').classList.remove('prop-list-active');
                dd.querySelector('.chevo').classList.remove('chevo-active');
            }
        });

        // Toggle the current dropdown
        menuOpt.classList.toggle('prop-list-active');
        chevo.classList.toggle('chevo-active');
    });
});