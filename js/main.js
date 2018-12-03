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

  $('#user_phone1').mask('+7 (999)-999-9999');
  $('#user_phone2').mask('+7 (999)-999-9999');
  $('#user_phone3').mask('+7 (999)-999-9999');

  $.validator.addMethod("isName", function(value, element) {
    return this.optional(element) || value == value.match(/[A-Za-zА-Яа-яЁё]{3,}/);
  });

  $("form").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        isName: true
      },
      user_phone: {
        required: true
      }
    },
    messages: {
      user_name: "",
      user_phone: ""
    },
    submitHandler: function() {
      $('form').submit(function(event) {
        event.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $('#thanks-modal').arcticmodal();
          $(this).find("input").val("");
          $("form").trigger("reset");
        });
        return false;
      });
    }
  });   

  $('.arcticmodal-close').on('click', function(){
    $.arcticmodal('close');
  });
});
