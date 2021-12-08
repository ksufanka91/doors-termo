let slider = new Splide('.splide', {
    perPage: 1,
    perMove: 1,
    arrows: false,
    pagination: false,
    gap: '10px',
});

slider.mount();

document.querySelector('.splide__arrow_prev').addEventListener('click', function () {
    slider.go('<');
});

document.querySelector('.splide__arrow_next').addEventListener('click', function () {
    slider.go('>');
});