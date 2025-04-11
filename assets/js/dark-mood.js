const darkModeButton = document.querySelector('.dark-mode-toggle');
const body = document.body;


if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeButton.addEventListener('click', () => {
   
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
