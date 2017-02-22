var Dashboard = {
    init: function() {
        Dashboard.initJQueryEvents();

        $(window).on('load', function() {

        });
    },
    initJQueryEvents: function() {
        $('.js-btnMore').on('click', function(e) {
            e.preventDefault();
            Dashboard.showMoreHistory.apply(this);
        })
    },

    showMoreHistory: function() {
        $(this).closest('.history__table').find('.tr').removeClass('inactive');
        $(this).closest('.history__tableBtns').addClass('inactive');
    }



};

$(function() {
    Dashboard.init();
});