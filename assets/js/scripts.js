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

// select color

let colors = Array.from(document.getElementsByClassName('color'));
let sizes = Array.from(document.getElementsByClassName('size'));

colors.forEach((item)=>{
  item.addEventListener('click', function () {
    colors.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
  })
})
sizes.forEach((item)=>{
  item.addEventListener('click', function () {
    sizes.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
  })
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
var blog2 = new Swiper(".blog2", {
  slidesPerView: 2.7,
  spaceBetween: 5,
  autoplay: true,
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
var mySwiper3 = new Swiper(".mySwiper3", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var mySwiper4 = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: mySwiper3,
  },
});
var comments = new Swiper(".comments", {
  slidesPerView: 1,
  spaceBetween: 60,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let accordionBtn2 = Array.from(document.getElementsByClassName('accordionBtn2'));

accordionBtn.forEach(item => {
  item.addEventListener('click' , function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});

accordionBtn2.forEach(item => {
  item.addEventListener('click' , function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
});