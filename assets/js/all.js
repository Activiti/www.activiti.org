/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.1
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,i,e){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("current",!t).toggleClass("behind",t),t=!0)};o.modal=function(t,i){var e,n;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.modal.isActive();)o.modal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),this.anchor=t,/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),e=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.modal.AJAX_SEND),o.get(n).done(function(i){if(o.modal.isActive()){t.trigger(o.modal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(i).on(o.modal.CLOSE,e),s.hideSpinner(),s.open(),t.trigger(o.modal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.modal.AJAX_FAIL);var i=l();i.hideSpinner(),s.pop(),t.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=t,this.anchor=t,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.block(),this.anchor.blur(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(i).off("keydown.modal").on("keydown.modal",function(o){var t=l();27===o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target===this&&o.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.modal.isActive()||o(i).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=o('<div class="'+this.options.blockerClass+' blocker current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css({opacity:0,display:"inline-block"}).animate({opacity:1},this.options.fadeDuration):this.$elm.css("display","inline-block"),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.modal.close=function(t){if(o.modal.isActive()){t&&t.preventDefault();var i=l();return i.close(),i.$elm}},o.modal.isActive=function(){return s.length>0},o.modal.getCurrent=l,o.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",blockerClass:"jquery-modal",spinnerHtml:'<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(t){return 1===this.length&&new o.modal(this,t),this},o(i).on("click.modal",'a[rel~="modal:close"]',o.modal.close),o(i).on("click.modal",'a[rel~="modal:open"]',function(t){t.preventDefault(),o(this).modal()})});
// Compatibility layer copying javascript functions from Drupal's drupal.js.

var Activiti = Activiti || {};

(function (Activiti) {

  /**
   * Encode special characters in a plain-text string for display as HTML.
   *
   * @ingroup sanitization
   */
  Activiti.checkPlain = function (str) {
    var character, regex,
      replace = { '&': '&amp;', "'": '&#39;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
    str = String(str);
    for (character in replace) {
      if (replace.hasOwnProperty(character)) {
        regex = new RegExp(character, 'g');
        str = str.replace(regex, replace[character]);
      }
    }
    return str;
  };

  /**
   * Replace substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {String} str
   *   A string with placeholders.
   * @param {Object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from the "args".  Internal use only.
   *
   * @return {String}
   *   Returns the replaced string.
   */
  Activiti.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!$.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      // Order the keys by the character length. The shortest one is the first.
      keys.sort(function (a, b) { return a.length - b.length; });
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Activiti.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

})(Activiti);

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

(function($) {
  $(function() {
    $('a[href^="http"]').filter(function() {
      return this.hostname && this.hostname !== location.hostname;
    }).attr('target', '_blank');
  });
})(jQuery);

(function($) {
  $(function() {
    $('.js-full-calendar').each(function() {
      var $root = $(this);
      $root.fullCalendar({
        header: {
          left: 'title',
          center: '',
          right: '',
        },
        viewRender: function(view, $element) {
          var $prev = $root.find('.js-calendar-prev');
          var $next = $root.find('.js-calendar-next');
          var calendar = $root.fullCalendar('getCalendar');
          $root.addClass('tweaked-fc');

          $prev.off('click.full-cal').on('click.full-cal', function(e) {
            e.preventDefault();
            calendar.prev();
          });
          $next.off('click.full-cal').on('click.full-cal', function(e) {
            e.preventDefault();
            calendar.next();
          });

          if ($element.find('.fc-right .js-calendar-prev').length == 0) {
            $prev.appendTo($root.find('.fc-right'));
          }
          if ($element.find('.fc-right .js-calendar-next').length == 0) {
            $next.appendTo($root.find('.fc-right'));
          }
        },
        googleCalendarApiKey: '@TODO replace with API key',
        events: {
          googleCalendarId: 'sabiolo48unj3l03ieehupviss@group.calendar.google.com'
        } 
      });
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    // Get current relative path
    var current_path = window.location.pathname;

    // Before you start page
    if (current_path === "/before-you-start") {
      $mktoForm = $('form[id*="mktoForm_"]');

      // If there is a marketo form in the page
      if ($mktoForm.length) {
        protectedForm = $mktoForm.data('protectionForm');

        // If you skip the form, set the cookie for 2 days
        $(document).on("click", "a.mktoForm-no-thanks", function() {
          $.cookie('protected_form_completed' + protectedForm, 'true', {
            expires: 2,
            path: '/'
          });
        });
      }
    }

    // Get started page
    if (current_path === "/get-started") {
      // If the form has not been skipped or filled, redirect
      if (document.cookie.search(/\bprotected_form_completed\S*=/) < 0) {
        window.location.replace("/before-you-start");
      }
    }
  });
})(jQuery);

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
  marketo.utils.pushToDataLayer = function (gtmEvent, cb, latestLeadSource) {
    if (typeof dataLayer !== "undefined") {
      var push = {
        'event': gtmEvent,
        'eventCallback': cb
      };
      if (latestLeadSource.length > 0) {
        push['mostRecentLeadSource'] = latestLeadSource;
      }
      dataLayer.push(push);
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
        // Ensure redirect property is checked afresh, in case it was updated
        // since the $form object was cached.
        window.location = $('#' + $form.attr('id')).data('redirect');
      };

      // 2. Google events may need to be fired.
      if ($form.data('googleEvent')) {
        var $latestLeadSourceElem = $(':input[name="mostRecentLeadSourceDetail"]', $form);
        var latestLeadSourceVal = '';
        if ($latestLeadSourceElem.length > 0) {
          latestLeadSourceVal = $latestLeadSourceElem.val();
        }
        marketo.utils.pushToDataLayer($form.data('googleEvent'), callback, latestLeadSourceVal);
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

    // If there is a form in the page
    if ($forms.length) {
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
    }
  });

})(jQuery);

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
