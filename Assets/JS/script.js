// Setting all my vars
const menuIcon = document.querySelector(".hamburgerMenu");
const sidebar = document.querySelector(".sidebar");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");

menuIcon.addEventListener('click', () => {
    // bring out side bar on click
    sidebar.classList.toggle('change');
    // rotate lines in hb menu on click
    line1.classList.toggle('rotate1');
    line2.classList.toggle('rotate2');
    line3.classList.toggle('rotate3');
})
window.onscroll = function() {
  // side bar disappear on scroll and the lines of hamburger menu reset
  $(".sidebar").removeClass('change');
  $(".line-1").removeClass('rotate1');
  $(".line-2").removeClass('rotate2');
  $(".line-3").removeClass('rotate3');
}
