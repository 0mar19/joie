const gallery = document.querySelector('.gallery');
const slides = gallery.querySelectorAll('.gallery__slide');
const prevBtn = gallery.querySelector('.gallery__prev');
const nextBtn = gallery.querySelector('.gallery__next');
let activeSlide = 0;

function showSlide(index) {
    slides[activeSlide].classList.remove('active');
    slides[index].classList.add('active');
    activeSlide = index;
}

prevBtn.addEventListener('click', function() {
    let index = activeSlide - 1;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
});

nextBtn.addEventListener('click', function() {
    let index = activeSlide + 1;
    if (index === slides.length) {
        index = 0;
	}
	showSlide(index);
});
