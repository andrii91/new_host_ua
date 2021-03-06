$(document).ready(function () {
  $('.packages-tab .link.top>li').click(function () {
    $('.packages-tab .link.top>li').removeClass('active');
    $(this).addClass('active');
    $('.packages-tab .content.top .div').removeClass('active');
    $('#' + $(this).data('tab')).addClass('active');
  })

  $('.tab-country .link.bottom>li').click(function () {
    $('.tab-country .link.bottom>li').removeClass('active');
    $('[data-tab="' + $(this).data('tab') + '"]').addClass('active');
    $('.tab-country .content.bottom .item').removeClass('active');
    $('.' + $(this).data('tab')).addClass('active');
  });

  $('.data_center-link li').click(function () {
    $('.data_center-link li').removeClass('active');
    $('[data-tab="' + $(this).data('tab') + '"]').addClass('active');
    $('.data_center-content .item').removeClass('active');
    $('#' + $(this).data('tab')).addClass('active');

  });

  $('.characteristics-link li').click(function () {
    $('.characteristics-link li').removeClass('active');
    $('[data-tab="' + $(this).data('tab') + '"]').addClass('active');
    $('.characteristics-item').removeClass('active');
    $('#' + $(this).data('tab')).addClass('active');

    $('.basic  .line').each(function () {
      $(this).css({
        'width': ($(this).parent().width() - $(this).parent().find('p').width() - 20) + 'px'
      })
    })
  });

  $('.news-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: false,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 3,
      }
    }
  })
  $('.basic  .line').each(function () {
    $(this).css({
      'width': ($(this).parent().width() - $(this).parent().find('p').width() - 20) + 'px'
    })
  })

  $(window).resize(function () {
    $('.basic  .line').each(function () {
      $(this).css({
        'width': ($(this).parent().width() - $(this).parent().find('p').width() - 20) + 'px'
      })
    })
  })

});