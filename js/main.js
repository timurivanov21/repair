$(document).ready(function() {
  
  $('#button-callback').on('click', function() {
    $('#modal').arcticmodal();
  });

  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('form').on('submit', function() {
    var nameVal = $('[name = user_name]').val(),
        phoneVal = $('[name = user_phone]').val();

    $.ajax({
      url: '../mailer/smart.php',
      data: {name:nameVal, phone:phoneVal},
      success: function() {
        // $('.class').fadeIn();
        // $(this).find('input').val('');
        alert('Сообщение успешно отправлено');
        // $('form').trigger('reset');
      }
    });
    return false;
  });

});
