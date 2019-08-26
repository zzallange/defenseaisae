$(document).ready(function(){
    
    //프리미엄 방산 기업 fadeInOut
    $('.company').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
    
    //국방photo_slider
    $('.p_slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000
    });
});//end



