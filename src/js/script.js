function splitSection() {
  const e = parseInt($('#bodyborder-top').height());
  if ($('.split-section').length > 0) {
    let contentWidth = $('.wrapper').width();
    if (!contentWidth || contentWidth < 300) {
      contentWidth = 1080;
      if ($(window).width() < 1281) {
        contentWidth = 900;
      } else if ($(window).width() < 1121) {
        contentWidth = 730;
      } else if ($(window).width() < 861) {
        contentWidth = 280;
      }
    }
    const contentThird = Math.round(contentWidth / 3);
    const windowWidth = $(window).width() - e * 2;
    const difference = Math.round((windowWidth - contentWidth) / 2);
    const smallWidth = contentThird + difference + 13;
    const bigWidth = windowWidth - smallWidth;
    if ($(window).width() < 861) {
      $('.split-onethird, .split-onethird .split-bg, .split-twothird, .split-twothird .split-bg').css({
        width: '100%',
      });
    } else {
      $('.split-onethird, .split-onethird .split-bg').css({
        width: `${smallWidth}px`,
      });
      $('.split-twothird, .split-twothird .split-bg').css({
        width: `${bigWidth}px`,
      });
    }
    setTimeout(() => {
      $('.split-section .vertical-center').each(function() {
        const n = $(this).height();
        const r = parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom'));
        const i = n + r;
        const s = $(this)
          .parents('.split-section')
          .height();
        if (i < s && $(window).width() > 861) {
          const o = (s - i) / 2;
          $(this).css({
            marginTop: `${o}px`,
          });
        } else {
          $(this).css({
            marginTop: '0px',
          });
        }
      });
    }, 500);
  }
  if ($(window).width() < 861) {
    $('.split-left, .split-right').each(function() {
      const n = $(this).height();
      if (n < 50) {
        $(this).css({
          'min-height': '300px',
        });
      }
    });
  }
}

$(window).load(() => {
  // Page loader

  $(window).trigger('scroll');
  $(window).trigger('resize');
});

$(document).ready(() => {
  $(window).trigger('resize');
});

$(window).resize(() => {
  splitSection();
});