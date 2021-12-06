let slider = new Splide('.splide', {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: '10px',

    prevArrow: '<div class="splide__prev"></div>',
    nextArrow: '<div class="splide__next"></div>',

});

if (window.innerWidth > 768) {
    slider.mount();
}