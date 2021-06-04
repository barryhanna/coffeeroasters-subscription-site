const toggleBtn = document.querySelector('.toggle-show-btn');

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleOption(e.target);
});

function toggleOption(element) {
  element.closest('.coffee-option').classList.toggle('open');
}
