const toggleBtns = document.querySelectorAll('.toggle-show-btn');

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
