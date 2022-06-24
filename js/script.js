const slides = document.querySelectorAll(".slider_item"),
      rightBtn = document.querySelector(".slider_right"),
      leftBtn = document.querySelector(".slider_left");


let slideIndex = 1;

function showSLides (n) {
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none')

    slides[slideIndex - 1].style.display = 'block';
}

showSLides(slideIndex);

function addIndexSlide(n) {
    showSLides(slideIndex += n)
}

rightBtn.addEventListener('click', () => {
    addIndexSlide(1);
    slides[slideIndex - 1].classList.add("backOutLeft")
});

leftBtn.addEventListener('click', () => {
    addIndexSlide(-1);
});