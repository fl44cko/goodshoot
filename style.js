const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    on: {
        slideChange: function () {
            document.querySelectorAll('.slider-slide').forEach((slide) => {
                slide.classList.remove('siema', 'siema2');
            });

            const activeIndex = this.activeIndex;
            const activeSlide = this.slides[activeIndex];
            const animationClass = isOdd(activeIndex) ? 'siema' : 'siema2';
            activeSlide.classList.add(animationClass);

            if (activeIndex < 3) {
                updateWordsText(activeIndex);
            } else {
                hideWordsText();
            }
        },
    },
});

function isOdd(number) {
    return number % 2 !== 0;
}

function updateWordsText(activeIndex) {
    const wordsElement = document.querySelector('.words p');
    const texts = [
        'Fotografia<br>Reklamowa',
        'Zdjęcia<br>Biznesowe',
        'Sesje<br>Wizerunkowe',
    ];

    wordsElement.innerHTML = texts[activeIndex];
}

function hideWordsText() {
    const wordsElement = document.querySelector('.words p');
    const p2 = document.querySelector('.p2');
    wordsElement.innerHTML = '';
    p2.innerHTML = '';
}

// window.addEventListener('scroll', function () {
//     const wordsElement = document.querySelector('.words');
//     const wordsRect = wordsElement.getBoundingClientRect();
//     const windowHeight = window.innerHeight || document.documentElement.clientHeight;

//     if (wordsRect.top < windowHeight) {
//         wordsElement.classList.add('siema2137');
//     }
// });
const kontakt = document.querySelector('.kontakt');
const section = document.querySelector('.section');

kontakt.addEventListener('click', function() {
    section.classList.toggle('kontakt_transform');
});