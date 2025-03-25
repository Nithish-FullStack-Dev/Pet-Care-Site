$(".page5-two").slick({
  dots: true,
  infinite: true,
  speed: 300,
  // autoplay: true,
  prevArrow: '<button  class="custom-prev"><</button>',
  nextArrow: '<button class="custom-next">></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(document).ready(function () {
  $(".read-more-btn").click(function () {
    var $this = $(this);
    var $content = $this.prev(".hidden-content");

    $content.slideToggle(300, function () {
      if ($content.is(":visible")) {
        $this.text("Read Less");
      } else {
        $this.text("Read More");
      }
    });
  });
});
