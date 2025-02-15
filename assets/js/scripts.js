// openDropdown

let dropdown = document.getElementById('dropdown');
let openDropdown = document.getElementById('openDropdown');

openDropdown.addEventListener('mouseenter' , function () {
  dropdown.classList.add('active');
  openDropdown.classList.add('active')
})

document.addEventListener('mousemove', (event) => {
  if (!event.target.closest('.dropdown') && !event.target.closest('.DropdownArea')) {
    dropdown.classList.remove('active');
    openDropdown.classList.remove('active')
  }
})


// swiper

var team = new Swiper(".team", {
  slidesPerView: 2.8,
  spaceBetween: 16,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 36,
    },
  },
});
var blog = new Swiper(".blog", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  autoplay: true,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var mySwiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: mySwiper,
  },
});

// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach(item => {
  item.addEventListener('click' , function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});

// aos

AOS.init();

// navigation

const list = document.querySelectorAll('.list');

function activeLink() {
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) =>
  item.addEventListener('mouseover', activeLink));


// counter

$('.counter').counterUp({
  delay: 10,
  time: 1400
});