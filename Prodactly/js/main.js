$(function(){
    $('.slider').slick({
    infinite: true,
    slidesToScroll: 3,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
},
    {
        breakpoint: 786,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
}

    ]
    });

    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active')
    })
});