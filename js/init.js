$(function(){

    if (document.body.clientWidth <= '480') {
        /*click on 480 and lower*/
        $('.b-mainNav__unit a').click(function(){
            var parent = $(this).parent();
            var expanded = $(this).siblings('.b-mainNav__unit__expanded');
            if (parent.hasClass('m-active')){
                parent.removeClass('m-active');
                expanded.slideUp('fast');
            } else{
                $('.b-mainNav__unit').removeClass('m-active');
                $('.b-mainNav__unit__expanded').slideUp('fast');
                parent.addClass('m-active');
                expanded.slideDown('fast');
            }
        });
    } else{
//        hover on 480 above
        $('.b-mainNav__unit').hover(
            function(){
                $(this).addClass('m-active');
                $(this).find('.b-mainNav__unit__expanded').delay(400).slideDown('fast');
            },
            function(){
                $(this).removeClass('m-active');
                $(this).find('.b-mainNav__unit__expanded').stop(true,true).slideUp('fast');
            }
        );
    }

    $('.b-mainNav__mobile_trigger').click(function(){
        $('.b-mainNav__unit').slideToggle('fast');
        $(this).toggleClass('m-active');
    })

});