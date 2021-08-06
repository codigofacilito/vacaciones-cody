jQuery('document').ready(function($){

    // MOSTRAR MENU RESPOSIVE //
    var menuBtn = $('.menu-icon'),
            menu = $('.navigation ul');
    
        menuBtn.click(function(){
    
            if(menu.hasClass('show')){
                menu.removeClass('show');
            } else{
                menu.addClass('show');
            }
        });
       
// BOTON IR ARRIBA //

        $('.irarriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.irarriba').slideDown(300);
            } else {
                $('.irarriba').slideUp(300);
            }
        });
    
    });