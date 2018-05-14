(function($) {
  $(function() {
    var $banner = $('#sliding-popup');

    // Any truthy value in the cookie is fine.
    if ($.cookie('cookie_banner')) {
      $banner.hide();
    }
    else {
      $banner.find('.agree-button').click(function () {
        $banner.slideUp();
        $.cookie('cookie_banner', '1');
      });

      $banner.slideDown();
    }
  });
})(jQuery);
