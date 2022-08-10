$('.team-carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    mobileFirst: true,

    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
    ]
})
