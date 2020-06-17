// Setting all my vars
const menuIcon = document.querySelector(".hamburgerMenu");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let line3 = document.querySelector(".line-3");

// Logic for hamburger menu
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    line1.classList.toggle('rotate1');
    line2.classList.toggle('rotate2');
    line3.classList.toggle('rotate3');
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

// making all lines change color when the user hovers over one line
menuIcon.addEventListener("mouseover", function( event ) {
  line1.style.backgroundColor = '#66ff66';
  line2.style.backgroundColor = '#66ff66';
  line3.style.backgroundColor = '#66ff66';

// reset the color after a short delay
setTimeout(function() {
  line1.style.backgroundColor = '#fff';
  line2.style.backgroundColor = '#fff';
  line3.style.backgroundColor = '#fff';
}, 500);

})

// === media query ===
// const mw = window.matchMedia("(max-width: 850px)")