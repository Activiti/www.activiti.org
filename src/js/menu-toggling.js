(function($) {
  $(function() {
    $('.js-main-menu-toggler').on('click', function(e) {
      if ($.modal.isActive()) {
        $.modal.close();
      }

      e.preventDefault();
      $('#menu-region').toggleClass('is-open');
      return false;
    });
  });
})(jQuery);