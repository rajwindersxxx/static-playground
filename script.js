import gsap from './node_modules/gsap/index.js';

let tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true});

tl.to('.green', { rotation: 360, duration: 1 });
tl.to('.red', { rotation: 360, duration: 1 });
tl.to('.blue', { rotation: 360, duration: 1 });
