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


function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

document.querySelector('.countdown__main-text').innerHTML = "Успей! Осталось " + " ";

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

let deadline = "December 10 2021 00:00:00 GMT+0300";
initializeClock('countdown', deadline);