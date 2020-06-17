// Logic for hamburger menu
const menuIcon = document.querySelector(".hamburgerMenu");
const logo = document.querySelector(".logo a");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')
})
// function to make navbar and logo disappear on scroll down and appear on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menuIcon.style.top = "20px";
    logo.style.top = "9px";
  } else {
    menuIcon.style.top = "-50px";
    logo.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}