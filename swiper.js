let swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 1000,
    direction: 'horizontal',
  
    keyboard:{
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: true,
    },
  
    autoplay: {
        delay: 2000,
    },
    loop: true,

    //slidesPerView: 1,
  //spaceBetween: 10,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    },

   1024: {
        slidesPerView: 5,
        spaceBetween: 40
      },

  }
  });


  let swiper1 = new Swiper('.swiper-one', {
    // Optional parameters
    speed: 1000,
    direction: 'horizontal',
    
    keyboard:{
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: true,
    },
    
    autoplay: {
        delay: 2000,
    },
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
    
    //slidesPerView: 1,
    //spaceBetween: 10,
    
    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 70
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    
    1024: {
        slidesPerView: 3,
        spaceBetween: 100
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 170
      },
    
    }
    });
    