(function ($) {
  $(function () {
    // Attach click handler to show modal, unless the modal contains a marketo
    // form protecting a page, and the form has already been completed, in which
    // case change the link target to the protected page.
    $('a[data-modal]').each(function () {
      var attach_modal = true;
      var $this_link = $(this);
      var modal_selector = $this_link.data('modal');
      var $modal = $(modal_selector);
      if ($modal.length) {
        var $mktoForm = $('form[id*="mktoForm_"]', $modal);
        if ($mktoForm.length) {
          if ($mktoForm.data('protectionForm') && $mktoForm.data('redirect')) {
            if ($.cookie('protected_form_completed' + $mktoForm.data('protectionForm')) === 'true') {
              $this_link.attr('href', $mktoForm.data('redirect'));
              attach_modal = false;
            }
          }
        }

        if (attach_modal) {
          $this_link.on('click', function(e) {
            $('form[id*="mktoForm_"]', $modal).removeAttr('style').find('[style]').removeAttr('style');

            $modal.modal({
              fadeDuration: 400,
              fadeDelay: 0,
              escapeClose: false,
              //showClose: false,
              closeText: '<div class="close-modal-inner">Close</div>',
              clickClose: false
            });

            e.preventDefault();
            return false;
          });
        }
      }
    });
  });
})(jQuery);
