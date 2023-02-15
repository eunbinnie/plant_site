const mainText = document.querySelector(".text1");

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(mainText, {
    cursor: false,
    speed: 50
  })
    // .pause(1000)
    .go();
})