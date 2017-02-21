var Common = {

	init: function() {

        Common.initJQueryEvents();

		$(window).on('load', function() {
            Common.checkPixelRatio();
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
        $('.js_dropDown').on('click', function(e) {
            e.preventDefault();
            Common.toggleDropDown.apply(this);
        });
        $('.js-sel_dropDown').on('click', function(e) {
            e.preventDefault();
            Common.selDropDown.apply(this);
        });

        $('.js-copy-btn').on('click', function(e) {
            e.preventDefault();
            Common.copyToClipboard(document.getElementById('copyTarget'));
        })
    },

    checkPixelRatio: function() {
        var ratio = window.devicePixelRatio;
        if(ratio > 1){
            Common.replaceImg(ratio);
        }
	},
    replaceImg: function(ratio) {
        var $img = $('[src $= "png"]');
        if(ratio >= 1 && ratio < 2){
            $img.prop('src', function(_, src) {
                src = src.replace(/@2x\./, '.'); // strip if it's already there
                return src.replace(/(\.\w+$)/, '@2x$1');
            });
        } else if(ratio >= 2){
            $img.prop('src', function(_, src) {
                src = src.replace(/@3x\./, '.'); // strip if it's already there
                return src.replace(/(\.\w+$)/, '@3x$1');
            });
        }

    },

    toggleDropDown: function() {
        if(!$(this).closest('.dd').hasClass('open')){
            $(this).closest('.dd').addClass('open');
            $('body').addClass('openDropDown');
        } else {
            $(this).closest('.dd').removeClass('open');
            $('body').removeClass('openDropDown');
        }

    },
    selDropDown: function() {
        var selected = $(this).text();
        $('.ddTrigger__labeled').text(selected);

        $(this).closest('.dd').removeClass('open');
        $('body').removeClass('openDropDown');
    },

    copyToClipboard: function(elem) {
        $(elem).select();
        // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch(e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    },

    initAutosize: function($self) {
        autosize($self);
    },
    limitTextarea: function(name) {
        var limitChartCount = 120;

        name.each(function() {
            $(this).on('keydown', function(e) {
                var enteredText = $(this).val(),
                    numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length,
                    characterCount = enteredText.length + numberOfLineBreaks;

                if(characterCount >= limitChartCount){
                    if (e.which != 8 & e.which != 46 & e.which != 37 & e.which != 39) {
                        e.preventDefault();
                    }

                }
            }).on('keyup', function(e) {
                var enteredText = $(this).val(),
                    numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length,
                    characterCount = enteredText.length + numberOfLineBreaks;

                $(this).closest('.row2').find('.limitNum__active').text(characterCount);
                $(this).closest('.row2').find('.limitNum__rest').text(limitChartCount);
            });
        });
    }


};

$(function() {
	Common.init();
});