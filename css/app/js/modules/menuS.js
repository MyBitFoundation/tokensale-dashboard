var MenuS = {

    init: function() {
        MenuS.initJQueryEvents();

        $(window).on('load', function() {

            //if screen width is more than 1024 than close menu automatic
            if($(window).width() >= 1024){
                MenuS.hideMenu($('.js-menuTrigger'));
            }

        }).on('resize', function() {

            //if screen width is more than 1024 than close menu automatic
            if($(window).width() >= 1024){
                MenuS.hideMenu($('.js-menuTrigger'));
            }
        });
    },
    initJQueryEvents: function() {
        //show
        $('.js-menuTrigger').on('click', function(e) {
            e.preventDefault();
            var $self = $(this);

            if(!$('.menuS').hasClass('menu-open')){
                MenuS.showMenu($self);
            } else {
                MenuS.hideMenu($self);
            }
        });
        //hide
        $('.menuS__backdrops').on('click', function(e) {
            e.preventDefault();
            MenuS.hideMenu($('.js-menuTrigger'));
        });
        //hide
        $('.menuS__close').on('click', function(e) {
            e.preventDefault();
            MenuS.hideMenu($('.js-menuTrigger'));
        });
    },

    showMenu: function($self) {
        $self.addClass('menu-open');
        $('.menuS').addClass('menu-open');
        $('body').addClass('menu-open');

    },
    hideMenu: function($trigger) {
        $trigger.removeClass('menu-open');
        $('.menuS').removeClass('menu-open');
        $('body').removeClass('menu-open');
    }
};

$(function() {
    MenuS.init();
});