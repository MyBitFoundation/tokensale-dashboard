var Modal = {

    init: function() {
      Modal.initJQueryEvents();
    },

    initJQueryEvents: function() {
        $('.modal').on('show.bs.modal', function () {


        }).on('shown.bs.modal', function () {
            $('body').addClass('modal-open');

        }).on('hidden.bs.modal', function () {

        });
    },


};

$(function() {
   Modal.init();
});