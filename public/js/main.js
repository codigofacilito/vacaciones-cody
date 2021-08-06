$('.menu-toggle').click(function(){
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
        $('#nav-menu-opciones').addClass('menu-visible');
    }else{
        $('#nav-menu-opciones').removeClass('menu-visible')
    }
});