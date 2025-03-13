
// filter

let openFilter = document.getElementById('openFilter');
let sidebar = document.getElementById('sidebar');
let closeFilter = document.getElementById('closeFilter');

openFilter.addEventListener('click', function () {
  sidebar.classList.add('active');
  document.querySelector('header').style.zIndex = '1';
});
closeFilter.addEventListener('click', function () {
  sidebar.classList.remove('active');
  document.querySelector('header').style.zIndex = '10';
});
