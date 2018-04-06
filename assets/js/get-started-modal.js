(function ($) {
  $(function () {
    var modalsProcessed = {};

    // Attach click handler to show modal, unless the modal contains a marketo
    // form protecting a page, and the form has already been completed, in which
    // case change the link target to the protected page.
    $('a[data-modal]').each(function () {
      var $mktoForm, redirect, protectedForm;
      // Attach click handler if modal status is anything other than 0. If modal
      // status is 2, show it immediately (i.e. it is supposed to be protecting
      // the current page).
      var modal_status = 1;
      var $this_link = $(this);
      var modal_selector = $this_link.data('modal');
      var $modal = $(modal_selector);
      if ($modal.length) {
        $mktoForm = $('form[id*="mktoForm_"]', $modal);
        if ($mktoForm.length) {
          protectedForm = $mktoForm.data('protectionForm');
          redirect = $mktoForm.data('redirect');
          if (protectedForm && redirect) {
            if ($.cookie('protected_form_completed' + protectedForm) === 'true') {
              $this_link.attr('href', redirect);
              modal_status = 0;
            }
            else {
              var current_path = window.location.pathname;
              if (redirect === current_path) {
                modal_status = 2;
              }
              // Also possible that the redirect contains a fragment identifier
              // or query string, so this is the protected page after all.
              else if (redirect.substr(0, current_path.length) && (redirect[current_path.length] === '?' || redirect[current_path.length] === '#')) {
                modal_status = 2;
              }
            }
          }
        }

        if (modal_status) {
          var showModal = function(e) {
            $mktoForm.removeAttr('style').find('[style]').removeAttr('style');

            $modal.modal({
              fadeDuration: 400,
              fadeDelay: 0,
              closeText: '<div class="close-modal-inner">Close</div>',
            });


            if (typeof e !== 'undefined') {
              e.preventDefault();
            }
            return false;
          };

          // This modal may already have had handlers bound to it, and
          // potentially soft protection checked, if any other links that would
          // invoke it have already been processed.
          if (!modalsProcessed.hasOwnProperty(modal_selector)) {
            // Soft protection mode means that the cookie recording whether the
            // form protecting a page can be set once the modal has been
            // dismissed, even if the Marketo form was never filled in.
            if (protectedForm && $mktoForm.data('protectionMode') === 'soft') {
              var closeHandler = function(event, modal) {
                $.cookie('protected_form_completed' + protectedForm, 'true', {
                  expires: 30,
                  path: '/'
                });
              };

              // Bind close handler to the normal modal close action, and any
              // no-thanks link.
              $modal.on($.modal.CLOSE, closeHandler);

              if ($mktoForm.data('noThanks')) {
                $modal.on('CustomisedMarketoFormReady', function () {
                  $('.mktoForm-no-thanks', $mktoForm).on('click', closeHandler);
                });
              }
            }

            if (modal_status === 2) {
              showModal();
            }

            modalsProcessed[modal_selector] = modal_status;
          }

          $this_link.on('click', showModal);
        }
      }
    });
  });
})(jQuery);
