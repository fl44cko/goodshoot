const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        click: function () {
            // Po kliknięciu slider zmieni się na następny slajd
            this.slideNext();
        },
        slideChange: function () {
            const currentSlide = this.realIndex + 1;
            const totalSlides = this.slides.length;
            const autorElement = document.querySelector('.slideNumber');
            autorElement.innerHTML = `Slide ${currentSlide} of ${totalSlides}`;
        },
    },
});
document.querySelector(".ikona").addEventListener("click", function() {
    window.history.back();
});