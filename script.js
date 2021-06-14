const toggleBtns = document.querySelectorAll('.toggle-show-btn');

const orderSummaryPackaged = document.getElementById('order-summary-packaged');
const orderSummaryType = document.getElementById('order-summary-type');
const orderSummaryAmount = document.getElementById('order-summary-amount');
const orderSummaryGrind = document.getElementById('order-summary-grind');
const orderSummaryFrequency = document.getElementById(
  'order-summary-frequency'
);

const orderSummaryModalPackaged = document.getElementById(
  'order-summary-modal-packaged'
);
const orderSummaryModalType = document.getElementById(
  'order-summary-modal-type'
);
const orderSummaryModalAmount = document.getElementById(
  'order-summary-modal-amount'
);
const orderSummaryModalGrind = document.getElementById(
  'order-summary-modal-grind'
);
const orderSummaryModalFrequency = document.getElementById(
  'order-summary-modal-frequency'
);
const form = document.getElementById('coffee-form');

console.log(form.elements['packaged'].value);
console.log(form.elements['type'].value);
console.log(form.elements['amount'].value);
console.log(form.elements['grind'].value);
console.log(form.elements['frequency'].value);

toggleBtns.forEach((button) =>
  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleOption(e.target);
  })
);

function toggleOption(element) {
  element.closest('.coffee-option').classList.toggle('open');
}

function initialiseOrderSummary() {
  console.log('Initialised');
}

document.onload = initialiseOrderSummary();
