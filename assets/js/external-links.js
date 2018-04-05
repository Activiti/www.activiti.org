(function($) {
  $(function() {
    $('a[href^="http"]').filter(function() {
      return this.hostname && this.hostname !== location.hostname;
    }).attr('target', '_blank');
  });
})(jQuery);
