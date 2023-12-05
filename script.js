// Functionality to hide navbar on scroll down and show on scroll up
const navbar = document.querySelector(".navbar");

let prevScroll = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;
  if (prevScroll < currentScroll) {
    navbar.style.top = "-85px";
  } else {
    navbar.style.top = "0";
  }

  prevScroll = currentScroll;
});
