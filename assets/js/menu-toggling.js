(function($) {
  $(function() {
    $('.js-main-menu-toggler').on('click', function(e) {
      if ($.modal.isActive()) {
        $.modal.close();
      }

      e.preventDefault();
      $('#main-menu').toggleClass('is-open');
      return false;
    });
  });
})(jQuery);