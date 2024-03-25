$(document).ready(function (e) {
    $('.btn_html').click(function (e) { 
        e.preventDefault();
        $('.project1').slideToggle(400);
        $('.project2').slideUp(400);
        $('.btn_html').toggleClass('active');
        $('.btn_js').removeClass('active');
    });
    $('.btn_js').click(function (e) { 
        e.preventDefault();
        $('.project2').slideToggle(400);
        $('.project1').slideUp(400);
        $('.btn_js').toggleClass('active');
        $('.btn_html').removeClass('active');
    });

});
