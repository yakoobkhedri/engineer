
// filter

let openFilter = document.getElementById('openFilter');
let sidebar = document.getElementById('sidebar');
let closeFilter = document.getElementById('closeFilter');

openFilter.addEventListener('click', function () {
  sidebar.classList.add('active');
});
closeFilter.addEventListener('click', function () {
  sidebar.classList.remove('active');
});

const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const minPriceValue = document.getElementById('minPriceValue');
const maxPriceValue = document.getElementById('maxPriceValue');

// تابع برای جدا کردن اعداد به صورت سه‌رقمی
function formatNumber(number) {
    return number.toLocaleString();
}

minPriceInput.addEventListener('input', function() {
    const value = parseInt(this.value);
    minPriceValue.textContent = formatNumber(value);
    if (value > parseInt(maxPriceInput.value)) {
        maxPriceInput.value = value;
        maxPriceValue.textContent = formatNumber(value);
    }
});

maxPriceInput.addEventListener('input', function() {
    const value = parseInt(this.value);
    maxPriceValue.textContent = formatNumber(value);
    if (value < parseInt(minPriceInput.value)) {
        minPriceInput.value = value;
        minPriceValue.textContent = formatNumber(value);
    }
});

// مقدار اولیه را فرمت می‌کنیم
minPriceValue.textContent = formatNumber(parseInt(minPriceInput.value));
maxPriceValue.textContent = formatNumber(parseInt(maxPriceInput.value));
