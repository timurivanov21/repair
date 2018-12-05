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

  $.validator.addMethod("isName", function(value, element) {
    return this.optional(element) || value == value.match(/[A-Za-zА-Яа-яЁё]{3,}/);
  });
  $.validator.addMethod("isPhone", function(value, element) {
    return this.optional(element) || value == value.match(/^\+\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/);
  });

  $("#form1").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        isName: true
      },
      user_phone: {
        required: true,
        isPhone: true
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
  
  $("#form2").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        isName: true
      },
      user_phone: {
        required: true,
        isPhone: true
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

  $("#form3").validate({
    rules: {
      user_name: {
        required: true,
        minlength: 2,
        isName: true
      },
      user_phone: {
        required: true,
        isPhone: true
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

  var $window = $(window);
  var $elem = $(".price-card");

  function isScrolledIntoView($elem, $window) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(document).on("scroll", function () {
    if (isScrolledIntoView($elem, $window)) {
        $elem.addClass("fadeInUp")
    }
  });

  var $window1 = $(window);
  var $elem1 = $(".steps-item__hidden");

  function isScrolledIntoView($elem1, $window1) {
    var docViewTop = $window1.scrollTop();
    var docViewBottom = docViewTop + $window1.height();

    var elemTop = $elem1.offset().top;
    var elemBottom = elemTop + $elem1.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(document).on("scroll", function () {
    if (isScrolledIntoView($elem1, $window1)) {
        $elem1.addClass("steps-item__visible")
    }
  });

  var $window2 = $(window);
  var $elem2 = $(".banner-title");

  function isScrolledIntoView($elem2, $window2) {
    var docViewTop = $window2.scrollTop();
    var docViewBottom = docViewTop + $window2.height();

    var elemTop = $elem2.offset().top;
    var elemBottom = elemTop + $elem2.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $(document).on("scroll", function () {
    if (isScrolledIntoView($elem2, $window2)) {
        $elem2.addClass("animateText")
    }
  });

  ymaps.ready(init);
  
  function init(){ 
      var myMap = new ymaps.Map("map", {
          center: [55.76, 49.106324],
          zoom: 10
      }); 

      var myPlacemark = new ymaps.Placemark([55.798551, 49.106324], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.png',
        iconImageSize: [32, 32]
      });
      myMap.geoObjects.add(myPlacemark);
  }

  $('#button-callback').on('click', function(){
    yaCounter51430780.reachGoal('btn');
    return true;
  });

});
