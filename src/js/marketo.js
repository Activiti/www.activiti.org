/**
 * Form IDs and modules which are hooked to Marketo's API to load.
 *
 * Marketo loadForm takes the following form:
 *
 * MktoForms2.loadForm(baseUrl, munchkinId, formId [,callback]))
 * callback takes the form: function (callback) {}
 *
 * This script attaches callback functions to the form. If no callback is
 * required then use the embed code directly, but if callback is required,
 * attach the form parameters to marketo.forms and add your callback function to
 * marketo.modules
 */
var marketo = {};

// Event Hooks.
marketo.modules = {};

// Helper Methods for Event Hooks.
marketo.utils = {};

(function ($) {

  // Constants used in generating forms.
  var _MUNCHKIN_ID = '453-LIZ-762';
  var _BASE_URL = '//app-ab05.marketo.com';

  //=======================
  // Marketo Helper methods
  //=======================

  // Marketo Helper Methods.
  // Add Required and Add Privacy Note dynamically.
  marketo.utils.setRequired = function ($form) {
    var privacy_message = $form.data('privacyMessage');
    var no_thanks = $form.data('noThanks');
    var redirect = $form.data('redirect');
    var intro = $form.data('intro');
    var optInLabel = $form.data('optInLabel');

    var m = {
      intro: '<div class="mktoForm-intro">' + intro + '</div>',
      optInLabel: '<div class="mktoForm-opt-in-label mktoFormRow">' + optInLabel + '</div>',
      privacy: '<p class="mktoForm-message">' + privacy_message + '</p>',
      require: '<p class="mktoForm-message mktoForm-message-required">* Required fields</p>',
      no_thanks: '<a class="mktoForm-no-thanks" href="' + redirect + '">' + no_thanks + '</a>'
    };
    // Newer design changes the order of the messages, and adds an intro.
    if (no_thanks && redirect) {
      $form.append(m.no_thanks);
    }
    if (intro) {
      $form.prepend(m.intro);
    }
    if (privacy_message) {
      $form.append(m.privacy);
    }
    if ($form.find('.mktoRequired').length > 0) {
      $form.append(m.require);
    }
    var $optIn = $form.find("label[for='emailOptIn']");
    if ($optIn.length && optInLabel.length > 0) {
      $optIn.closest('.mktoFormRow').before(m.optInLabel);
    }
  };
  marketo.utils.pushToDataLayer = function (gtmEvent, cb) {
    if (typeof dataLayer !== "undefined") {
      dataLayer.push({
        'event': gtmEvent,
        'eventCallback': cb
      });
    }
    else {
      cb();
    }
  };

  // Defaults are are handlers that are executed for all marketo forms.
  marketo.modules.all = {};
  marketo.modules.all.props = {};
  marketo.modules.all.attachEventHandlers = function (form) {

    // We support a few different things.
    // 0. Add some basic state handlers.
    // 1. 'Protected' forms protect a page, and we submit a cookie to flag that
    //    the form has been filled in.
    // 2. Google events may need to be fired.
    // 3. We may need to do a custom redirect.

    var $form = form.getFormElem();
    form.onSubmit(function () {
      // Set State to form submitting.
      marketo.state.set(3);
    });
    form.onSuccess(function () {
      // Set State to form submitted.
      marketo.state.set(4);

      // 1. 'Protected' forms protect a page, and we submit a cookie to flag
      // that the form has been filled in.
      if ($form.data('protectionForm')) {
        $.cookie('protected_form_completed' + $form.data('protectionForm'), 'true', {
          expires: 30,
          path: '/'
        });
      }

      // 3. We may need to do a custom redirect.
      var callback = function () {
        window.location = $form.data('redirect');
      };

      // 2. Google events may need to be fired.
      if ($form.data('googleEvent')) {
        marketo.utils.pushToDataLayer($form.data('googleEvent'), callback);
        return false;
      }
      else {
        callback();
        return false;
      }
    });

  };
  marketo.modules.all.ready = function (form) {
    // Use form labels as placeholder text.
    var $form = form.getFormElem();
    // 1. 'Protected' forms protect a page, and check a cookie and redirect if
    // needed. The form markup is hidden ready to be shown in a modal on most
    // pages, the redirect should only be performed if the form is shown as that
    // is when the protected page is being requested.
    if ($form.data('protectionForm') && $form.data('redirect') && $form.is(':visible')) {
      if ($.cookie('protected_form_completed' + $form.data('protectionForm')) === 'true') {
        window.location = $form.data('redirect');
      }
    }

    if (typeof $form.data('most-recent-lead-source-detail') !== 'undefined') {
      form.addHiddenFields({'mostRecentLeadSourceDetail': $form.data('most-recent-lead-source-detail')});
    }

    // Check for placeholder.js - i.e. if the browser is Internet Explorer.
    if (typeof alfrescoPlaceholder !== 'undefined') {
      alfrescoPlaceholder.init();
    }

    $($form).find('.mktoFieldWrap label').each(function () {
      $(this).siblings('input').attr("placeholder", $(this).text().replace(':', '').replace('*', ''));
      $(this).siblings('textarea').attr("placeholder", $(this).text().replace(':', '').replace('*', ''));
      $(this).siblings('.mktoField.mktoRequired').attr('placeholder', $(this).siblings('.mktoField.mktoRequired').attr('placeholder') + ' *');

      // If there's a select list with options.
      if ($(this).siblings('select').children('option').length > 0 && $(this).siblings('.mktoField.mktoRequired')) {
        $('select#' + $(this).attr('for') + ' option:first').text($(this).text().replace(':', '').replace('*', '') + '...*');
      }
    });

    var $optInRow = $("[name='emailOptIn']").parents('.mktoFormRow');
    var $submitRow = $($form).find('.mktoButtonRow');
    $submitRow.prepend($optInRow);

    // Show fake button (to allow defining custom button text) which presses the
    // to-be-hidden submit button.
    if ($form.data('buttonText')) {
      var $submitBtn = $submitRow.find('button');
      $submitRow.addClass('mktoHide');
      $submitBtn.addClass('mktoOriginalButton');
      $submitRow.after('<div class="mktoButtonRow"><span><a class="mktoButton mktoReplaceButton">' + $form.data('buttonText') + '</a></span></div>');
      $('.mktoReplaceButton', $form).click(function () {
        $submitBtn.click();
      });
    }

    // Ensure placeholder encoded.
    // Strip out inline styles so our templates can be applied always.
    $form.removeAttr('style').find('*').removeAttr('style');

    // Add Required.
    marketo.utils.setRequired($form);
  };

  // Marketo Form States.
  // Get the current state with get method.
  // Set the current state with the set method.
  // Subscribe to events with $(document).on('formStateChange');.
  marketo.state = (function () {
    var states = {
      current: 'marketo-pre-load',
      available: [
        'marketo-pre-load', // 0
        'marketo-loading', // 1
        'marketo-loaded', // 2
        'marketo-submitting', // 3
        'marketo-submitted' // 4
      ],
      set: function (arg) {
        // Added event triggering when state changes.
        states.current = states.available[arg];
        $(document).trigger('formStateChange');
        return states.current;
      },
      get: function () {
        return states.current;
      }
    };
    return {
      set: states.set,
      get: states.get
    };
  }());
  // Hooks in forms when rendered.
  $(document).ready(function () {
    var _all = marketo.modules.all;
    var $forms = $('[id*="mktoForm_"]');
    $forms.each(function () {
      var $this = $(this);
      var id = $this.attr('id');
      var args = {};

      // Show the loading icon.
      $this.siblings('.icon__loader').show();

      // Strip out inline styles unless set otherwise.
      // Build parameters for form load.
      args.formId = id.replace('mktoForm_', '');
      args.baseUrl = _BASE_URL;
      args.munchkinId = _MUNCHKIN_ID;
      // Load Form.
      MktoForms2.loadForm(args.baseUrl, args.munchkinId, args.formId, function defaultHandler(form) {
        // Marketo adds some seriously crazy inline styles that we simply don't
        // need and cause the forms to over flow.
        form.getFormElem().removeAttr('style');
        // Lets hide the form and show a loading icon until the pre-fill data is
        // ready then we show the form.
        form.getFormElem().hide();
        _all.attachEventHandlers(form); // Load events needed for all forms.
      });
    });
    marketo.state.set(1);
    MktoForms2.whenReady(function (form) {
      marketo.state.set(2);

      // Hide the loading icon.
      var $form = $(form.getFormElem());
      $form.siblings('.icon__loader').hide();

      _all.ready(form); // Ready code run for all forms.

      // Hide the loading icon.
      $(form).siblings('.icon__loader').hide();

      // Trigger another event for the form once the customisations have ran.
      $form.trigger('CustomisedMarketoFormReady');
    });
  });

})(jQuery);
