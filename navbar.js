$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 200 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});