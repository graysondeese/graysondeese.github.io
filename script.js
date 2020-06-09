const menuIcon = document.querySelector(".hamburgerMenu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')
})