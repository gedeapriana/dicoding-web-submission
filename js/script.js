const dot = document.querySelector("#nav-hamburger");
const floatNav = document.querySelector("#floating-nav");
const header = document.querySelector("#header");

dot.addEventListener('click', function () {
  floatNav.classList.toggle("hidden");
});

document.addEventListener('click', function (event) {
  if(!floatNav.contains(event.target) && !dot.contains(event.target)) {
    floatNav.classList.add("hidden");
  }
});

window.addEventListener('scroll', function () {
  if(this.scrollY > 0) {
    header.classList.add("bg-light");
    header.classList.add("box-shadow");
  } else {
    header.classList.remove("bg-light");
    header.classList.remove("box-shadow");
  }
});