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