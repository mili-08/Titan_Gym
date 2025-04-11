const form = document.getElementById('contactForm');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modal');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  spinner.style.display = 'block';

  setTimeout(() => {
    spinner.style.display = 'none';
    modal.style.display = 'flex';
    form.reset();
  }, 2000); 
});

function cerrarModal() {
  modal.style.display = 'none';
}