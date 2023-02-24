const upIcon = document.getElementById("up-icon");

upIcon.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function () {
  if (scrollY > 580) {
    gsap.to(upIcon, .6, {
      x: 0
    });
  } else {
    gsap.to(upIcon, .6, {
      x: 100
    });
  }
}, 300)