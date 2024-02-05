const section = document.querySelector('.section');
const buttons = document.querySelectorAll('.kontakt, .contactUs, .ikonaX');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        section.classList.toggle('kontakt_transform');
    });
});
