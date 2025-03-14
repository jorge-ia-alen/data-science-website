// Inicializar Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Number of slides visible for mobile
    spaceBetween: 20, // Space between slides
    loop: true, // Infinite carousel
    autoplay: {
      delay: 3000, // Switching time (3 seconds)
      disableOnInteraction: false, // Don't stop autoplay with interaction
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Changes the number of slides visible depending on the width of the screen
      640: {
        slidesPerView: 2, // 2 slides on tablets
      },
      1024: {
        slidesPerView: 3, // 3 slides on big screens
      },
    },
  });