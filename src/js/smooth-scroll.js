(function($) {

  function localLinks() {
    return $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').filter(function() {
      var same_host = location.hostname == this.hostname;
      var same_path = location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'');
      var target_present = $(this.hash).length || $('[name=' + this.hash.slice(1) + ']').length;
      return same_host && same_path && target_present;
    });
  }

  $(function() {
    localLinks().on('click', function(e) {
      event.preventDefault();
      var $target = $(this.hash)
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
      $('html, body').stop().animate({
        scrollTop: $target.offset().top - $('#menu-region').height()
      }, 1000, function() {
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    });
  });

})(jQuery);
