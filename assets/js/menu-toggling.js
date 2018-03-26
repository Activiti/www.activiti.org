(function($) {
  $(function() {
    $('.js-main-menu-toggler').on('click', function(e) {
      e.preventDefault();
      $('#main-menu').toggleClass('is-open');
    });
  });
})(jQuery);