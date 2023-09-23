
const carousel = document.getElementById('carousel');
const slides = document.querySelector('.slides');
const slideWidth = carousel.clientWidth;
let currentIndex = 0;
const slideInterval = 2000; 

function updateSlidePosition() {
  slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
  updateSlidePosition();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.children.length;
  updateSlidePosition();
}


function autoSlide() {
  nextSlide();
}


const slideIntervalId = setInterval(autoSlide, slideInterval);

// Hentikan slide otomatis ketika mouse hover pada carousel
carousel.addEventListener('mouseenter', () => {
  clearInterval(slideIntervalId);
});


carousel.addEventListener('mouseleave', () => {
  clearInterval(slideIntervalId);
  slideIntervalId = setInterval(autoSlide, slideInterval);
});
