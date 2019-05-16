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
        googleCalendarApiKey: 'AIzaSyB5evPhjurN1fGVbckqlTVmGUBMWCXi_8s',
        events: {
          googleCalendarId: 'alfresco.com_js010n8567npirubeoimhst1ps@group.calendar.google.com'
        } 
      });
    });
  });
})(jQuery);
