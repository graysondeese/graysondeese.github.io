// Setting all my vars
const menuIcon = document.querySelector(".hamburgerMenu");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");

// Logic for hamburger menu
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})
// function to make navbar and logo disappear on scroll down and appear on scroll up
// add logic to stop the function if mw < 850
var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  $(".navbar").removeClass('change')
var currentScrollPos = window.pageYOffset;
// if we are scrolling down
  if (prevScrollPos > currentScrollPos) {
    // $(".navbar").hide();
    menuIcon.style.top = "20px";
    logo.style.top = "9px";
    // if we are not scrolling down
  } else {
    // $(".navbar").show();
    menuIcon.style.top = "-50px";
    logo.style.top = "-50px";
  }
  prevScrollPos = currentScrollPos;
}



// media query
const mw = window.matchMedia("(max-width: 850px)")