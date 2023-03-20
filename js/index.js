const upIcon = document.getElementById("up-icon");
const hiddenUpIcon = document.querySelector("#hidden-up-icon");
const header = document.querySelector('header');

upIcon.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function () {
  if (scrollY > 580) {
    header.style.opacity = 0.7;
    header.style.transition = `opacity 0.3s ease-in-out`;

    hiddenUpIcon.classList.remove("hidden")
    gsap.to(upIcon, .6, {
      x: 0
    });
  } else {
    header.style.opacity = 1;
    gsap.to(upIcon, .6, {
      x: 100
    });
  }
}, 300)

const aboutSwiperEl = document.querySelector('#section1 .swiper');
let windowWidth = window.innerWidth;
let aboutSwiper = undefined;

function initSwiper() {

  if (windowWidth < 901 && aboutSwiper == undefined) {
    aboutSwiper = new Swiper(aboutSwiperEl, {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (windowWidth >= 901 && aboutSwiper != undefined) {
    aboutSwiper.destroy();
    aboutSwiper = undefined;
  }

}

initSwiper();

window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;
  initSwiper();
});


const pickSwiperEl = document.querySelector('#section3 .swiper');
let pickSwiper = undefined;

function pickMeSwiper() {

  if (windowWidth < 901 && pickSwiper == undefined) {
    pickSwiper = new Swiper(pickSwiperEl, {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  } else if (windowWidth >= 901 && pickSwiper != undefined) {
    pickSwiper.destroy();
    pickSwiper = undefined;
  }

}

pickMeSwiper();

window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;
  pickMeSwiper();
});