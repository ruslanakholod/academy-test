customPlaceholderInit();

function customPlaceholderInit() {
  var els = $('.custom-placeholder-wrap');
  els.each(function () {
      $(this).on('click', clickHandler);
      $(this).find('input, textarea').on('focus', focusHandler);
      $(this).find('a[data-event]').on('click', clickControl);
  });

  textareaDetect();

  function textareaDetect() {
      els.each(function () {
          var textarea = $(this).find('textarea');
          if (textarea.length) {
              $(this).find('.custom-placeholder').addClass('textarea-custom-placeholder');
          }
      });
  }

  function clickControl(e) {
      var el = findParent($(e.target), 'custom-placeholder-wrap');
      el.addClass('custom-placeholder-active');
  }

  function clickHandler(e) {
      var el = findParent($(e.target), 'custom-placeholder-wrap'),
          input = el.find('input, textarea');
      el.addClass('custom-placeholder-active');
      input
          .focus()
          .focusout(function () {
              var self = $(this),
                  val = self.val().trim();

              if (!val && !$(e.target).hasClass('datepicker-form')) {

                  el.removeClass('custom-placeholder-active');

              } else if (!val && $(e.target).hasClass('datepicker-form')) {

                  var that = $(this)
                  $(document).on('click', function () {

                      setTimeout(function () {
                          if (!that.val().trim() && !$('.datepicker-container').is(':visible')) {
                              el.removeClass('custom-placeholder-active');
                          }
                      }, 200);
                  })
              }
          });
  }

  function focusHandler(e) {
      var el = findParent($(e.target), 'custom-placeholder-wrap');
      el.addClass('custom-placeholder-active');

      $(e.target).focusout(function () {
          var val = $(this).val().trim();
          if (!val && !$(e.target).hasClass('datepicker-form')) {
              el.removeClass('custom-placeholder-active');
          } else if (!val && $(e.target).hasClass('datepicker-form')) {

              var that = $(this);
              $(document).on('click', function () {
                  setTimeout(function () {
                      if (!that.val().trim() && !$('.datepicker-container').is(':visible')) {
                          el.removeClass('custom-placeholder-active');
                      }
                  }, 200);
              })
          }
      });
  }
}

function findParent(el, class_) {
  var parent = el.parent();
  // debugger;
  if (parent.hasClass(class_)) {
      return parent;
  }
  else {
      return findParent(parent, class_);
  }
}
