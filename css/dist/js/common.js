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

        //$('.js-copy-btn').on('click', function(e) {
        //    e.preventDefault();
        //    Common.copyToClipboard(document.getElementById('copyTarget'));
        //})
    },


    selDropDown: function() {
        var selected = $(this).text();
        $('.ddTrigger__text').text(selected);

        $(this).closest('.dd').removeClass('open');
        $('body').removeClass('openDropDown');
    },

    //copyToClipboard: function(elem) {
    //    $(elem).select();
    //    // create hidden text element, if it doesn't already exist
    //    var targetId = "_hiddenCopyText_";
    //    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    //    var origSelectionStart, origSelectionEnd;
    //    if (isInput) {
    //        // can just use the original source element for the selection and copy
    //        target = elem;
    //        origSelectionStart = elem.selectionStart;
    //        origSelectionEnd = elem.selectionEnd;
    //    } else {
    //        // must use a temporary form element for the selection and copy
    //        target = document.getElementById(targetId);
    //        if (!target) {
    //            var target = document.createElement("textarea");
    //            target.style.position = "absolute";
    //            target.style.left = "-9999px";
    //            target.style.top = "0";
    //            target.id = targetId;
    //            document.body.appendChild(target);
    //        }
    //        target.textContent = elem.textContent;
    //    }
    //    // select the content
    //    var currentFocus = document.activeElement;
    //    target.focus();
    //    target.setSelectionRange(0, target.value.length);
    //
    //    // copy the selection
    //    var succeed;
    //    try {
    //        succeed = document.execCommand("copy");
    //    } catch(e) {
    //        succeed = false;
    //    }
    //    // restore original focus
    //    if (currentFocus && typeof currentFocus.focus === "function") {
    //        currentFocus.focus();
    //    }
    //
    //    if (isInput) {
    //        // restore prior selection
    //        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    //    } else {
    //        // clear temporary content
    //        target.textContent = "";
    //    }
    //    return succeed;
    //}

};

$(function() {
	Common.init();
});