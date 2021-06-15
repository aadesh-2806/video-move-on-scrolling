const intro = document.querySelector('.intro');
const video = document.querySelector('.intro video');
const text = document.querySelector('.intro h1');
const section = document.querySelector('section');
const end = document.querySelector('section h1');

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})

    .addIndicators()
    .setPin(intro)
    .addTo(controller);


const textAnimate = TweenMax.fromTo(
    text,3,
    {
        opacity: 1 
    }, 
    { 
        opacity: 0 
    }
);

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
    .setTween(textAnimate)
    .addTo(controller);

let accelmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
})
setInterval(() => {
    delay += (scrollpos - delay) * accelmount;
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 33.3)
