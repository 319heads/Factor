jQuery(document).ready(function ($) {


    //$(window).stellar();

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    slide.waypoint(function (event, direction) {

        dataslide = $(this).attr('data-slide');

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });
 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        var currentPosition = -1*($('html').offset().top);
        var clickedPosition = $('.slide[data-slide="' + dataslide + '"]').offset().top;
        if(clickedPosition>currentPosition){
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
            }, 1300, 'easeInOutQuint');
        }else{
            console.log("up");
            htmlbody.animate({
                scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 10 
            }, 1300, 'easeInOutQuint'); 
        }
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});