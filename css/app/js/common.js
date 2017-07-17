var Common = {

	init: function() {

        Common.initJQueryEvents();

		$(window).on('load', function() {

		}).on('resize', function() {

		});

	},

    initJQueryEvents: function() {
        $('.field').on('focus', function() {
           $('body').addClass('openKeyboard');
        }).on('blur', function() {
            $('body').removeClass('openKeyboard');
        });

        //dropDown
        $('.js-sel_dropDown').on('click', function(e) {
            e.preventDefault();
            Common.selDropDown.apply(this);
        });
    },

    selDropDown: function() {
        var selected = $(this).text();
        $('.ddTrigger__text').text(selected);

        $(this).closest('.dd').removeClass('open');
        $('body').removeClass('openDropDown');
    }
};

$(function() {
	Common.init();
});