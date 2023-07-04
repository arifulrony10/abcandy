
const swiper = new Swiper(".mySwiper", {
    initialSlide: 1, // initial number
    lazy: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // responsive
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
    },
    zoom: true,
    // autoplay: true, // autoplay
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,  // infinity loop
    pagination: {
        el: ".swiper-pagination",
    },
});



  // console.log(swiper.activeIndex)
