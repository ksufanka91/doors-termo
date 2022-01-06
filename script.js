// slider
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

// timer
function initializeClock(id, endtime) {
    let intervalId;
    let clock = document.getElementById(id);
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');


    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);

        return {
            total: t,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function updateClock() {
        let t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0 && intervalId) {
            clearInterval(intervalId);
        }
    }

    updateClock();
    intervalId = setInterval(updateClock, 1000);
}

// для demo всегда отсчитываем 12 часов
let today = new Date().getTime();
let endtime = new Date(today + 12 * 60 * 60 * 1000);
initializeClock('countdown', endtime);

// yandex maps
ymaps.ready(init);

function init() {
    let contactsMap = new ymaps.Map('contacts-map', {
        center: [55.721356, 37.611387],
        zoom: 10
    });

    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.671309, 37.583955]
        },
    }, {
        preset: 'islands#blackStretchyIcon',
        iconColor: '#0095b6'
    })

    contactsMap.geoObjects
        .add(myGeoObject)
}

// arrow

let goTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    let scrolled = window.scrollY;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('back-to-top_show');
    } else if (scrolled < coords) {
        goTopBtn.classList.remove('back-to-top_show');
    }
}

function backToTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
}
