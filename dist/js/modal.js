var Modal = {

    init: function() {
      Modal.initJQueryEvents();
    },

    initJQueryEvents: function() {
        $('.js_open_modal').on('click', function(e) {
            e.preventDefault();
            Modal.openModal.apply(this);
        });

        $('.js_dismiss_modal').on('click', function(e) {
            e.preventDefault();
            Modal.closeModal.apply(this);
        });
    },

    openModal: function() {
        var target = $(this).data('target');
        $(target).removeClass('none');
        $('body').append('<div class="modal-backdrop fade"></div>');
        setTimeout(function() {
            $('.modal-backdrop').addClass('in');
            $(target).addClass('in');
        }, 100)
    },
    closeModal: function() {
        var target = $('.modal.in');
        $(target).removeClass('in');
        $('.modal-backdrop').removeClass('in');
        setTimeout(function() {
            target.addClass('none');
            $('.modal-backdrop').remove();
        }, 100)
    }
};

$(function() {
   Modal.init();
});