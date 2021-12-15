$(document).ready(function(){
    $('.panel-menu ul li a').click(function(){
        $('.panel-menu ul li a').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
});