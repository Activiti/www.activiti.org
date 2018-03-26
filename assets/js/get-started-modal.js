(function ($) {
  $(function () {
    $('a[data-modal]').on('click', function(e) {
      $($(this).data('modal')).modal({
        fadeDuration: 200,
        escapeClose: false,
        clickClose: false,
        showClose: false
      });
      e.preventDefault();
      return false;
    });
  });
})(jQuery);
