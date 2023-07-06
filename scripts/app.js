const swiper = new Swiper(".heroSwiper", {
  lazy: true,

  // responsive
  breakpoints: {
    220: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
      initialSlide: 0, // initial number
    },
    640: {
      slidesPerView: 1,
      initialSlide: 0, // initial number
    },
    1001: {
      slidesPerView: 1,
      initialSlide: 0, // initial number
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
      initialSlide: 1, // initial number
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    },
  },
  // slidesPerView: "auto",
  centeredSlides: true,
  zoom: true,
  autoplay: true, // autoplay
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // loop: true,  // infinity loop
});

/* blog swipper */

// blogSwiper

const blogSwiper = new Swiper(".blogSwiper", {
  initialSlide: 1, // initial number
  lazy: true,
  // responsive
  // breakpoints: {
  //     320: {
  //         slidesPerView: 1,

  //     },
  //     640: {
  //         slidesPerView: 2,
  //         spaceBetween: 10,
  //     },
  //     768: {
  //         slidesPerView: 3,
  //         spaceBetween: 40,
  //     },
  //     1024: {
  //         slidesPerView: 3,
  //         spaceBetween: 80,
  //     },
  // },
  zoom: true,
  // autoplay: true, // autoplay
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,  // infinity loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// video modal

const playBtn = document.querySelector(".videoModal");
const clip = document.querySelector(".clip");
const video = document.querySelector("video");
const playBtnContainer = document.querySelector(".playBtnContainer");

const watchNowBtn = document.querySelector(".playBtnContainer");
const watchNowBtn2 = document.querySelector(".watchNow2");
const watchNowCloseBtn = document.querySelector(".videoModalCloseBtn");

const loadMoreBtn = document.querySelector("#loadMoreBlog");
const blog9 = document.querySelector(".blogPost9");
const blog10 = document.querySelector(".blogPost10");
const blog11 = document.querySelector(".blogPost11");

const openForm = document.querySelectorAll(".openFormModal");
const formModal = document.querySelector(".formModal");
const formCloseBtn = document.querySelectorAll(".formModalCloseBtn");

watchNowCloseBtn.onclick = () => {
  playBtn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};

loadMoreBtn.onclick = () => {
  blog9.classList.add("active");
  blog10.classList.add("active");
  blog11.classList.add("active");
};

const openFormFn = () => {
  return formModal.classList.add("active");
};
const closeFormFn = () => {
  return formModal.classList.remove("active");
};

const watchVideoFn = () => {
  playBtn.classList.add("active");
  clip.classList.add("active");
  video.play();
};

const closeVideoFn = () => {
  playBtn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};

// hamburger
const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

hamburger.onclick = () => {
  menu.classList.toggle("showMenu");
};
