'use strict';

// Default plan options, used to populate initial order
// summary and order summary modal.
const planOptions = {
  packaged: 'capsule',
  type: 'single',
  amount: '250g',
  grind: 'wholebean',
  frequency: 'Every week',
};

const toggleBtns = document.querySelectorAll('.toggle-show-btn');

// Order Summary radio buttons
const orderSummaryPackaged = document.getElementById('order-summary-packaged');
const orderSummaryType = document.getElementById('order-summary-type');
const orderSummaryAmount = document.getElementById('order-summary-amount');
const orderSummaryGrind = document.getElementById('order-summary-grind');
const orderSummaryFrequency = document.getElementById(
  'order-summary-frequency'
);

// Order summary modal - to be updated.
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

const planBtn = document.querySelector('.plan-btn');

if (planBtn) {
  planBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.order-summary-modal').classList.toggle('open');
  });
}

if (form) {
  Array.from(form.elements).forEach((element) =>
    element.addEventListener('change', updateOrder)
  );
}

function updateOrder() {
  planOptions.packaged = form.elements['packaged'].value;
  planOptions.type = form.elements['type'].value;
  planOptions.amount = form.elements['amount'].value;
  planOptions.grind = form.elements['grind'].value;
  planOptions.frequency = form.elements['frequency'].value;
  updateOrderSummaries();
}

// Update the Order Summary and Order Summary Modal
function updateOrderSummaries() {
  updateOrderSummary();
  updateOrderSummaryModal();
}

function updateOrderSummary() {
  orderSummaryPackaged.innerText = planOptions['packaged'];
  orderSummaryType.innerText = planOptions['type'];
  orderSummaryAmount.innerText = planOptions['amount'];
  orderSummaryGrind.innerText = planOptions['grind'];
  orderSummaryFrequency.innerText = planOptions['frequency'];
}

function updateOrderSummaryModal() {
  orderSummaryModalPackaged.innerText = planOptions['packaged'];
  orderSummaryModalType.innerText = planOptions['type'];
  orderSummaryModalAmount.innerText = planOptions['amount'];
  orderSummaryModalGrind.innerText = planOptions['grind'];
  orderSummaryModalFrequency.innerText = planOptions['frequency'];
}

toggleBtns.forEach((button) =>
  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleOption(e.target);
  })
);

function toggleOption(element) {
  element.closest('.coffee-option').classList.toggle('open');
}

// Dismiss modal when checkout button is clicked.
const checkoutBtn = document.querySelector('.checkout-btn');
const orderSummaryModal = document.querySelector('.order-summary-modal');
const orderSummaryModalContent = document.querySelector(
  '.order-summary-modal .content'
);

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', (e) => {
    e.currentTarget.closest('.order-summary-modal').classList.toggle('open');
  });
}

if (orderSummaryModal) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && orderSummaryModal.classList.contains('open')) {
      orderSummaryModal.classList.remove('open');
    }
  });

  orderSummaryModal.addEventListener('click', (e) => {
    const isOutside = !e.target.closest('.content');
    if (isOutside) {
      orderSummaryModal.classList.remove('open');
    }
  });
}

// Burger Menu
const btnBurgerClose = document.querySelector('.burger-close');
const burgerMenu = document.querySelector('.burger-menu');

btnBurgerClose.addEventListener('click', (e) => {
  burgerMenu.style.display = 'none';
});

const btnNavToggle = document.querySelector('.nav-toggle');

btnNavToggle.addEventListener('click', (e) => {
  burgerMenu.style.display = 'block';
});

document.onload = updateOrderSummaries();
