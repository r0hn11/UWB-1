let founders = document.querySelector('.founders');
let directors = document.querySelector('.directors');
let experts = document.querySelector('.xperts');
let home = document.querySelector('.home a');

window.addEventListener('load', function(){
    founders.style.transitionDuration = '0.5s'
    directors.style.transitionDuration = '0.5s'
    directors.style.transitionDelay = '0.5s'
    experts.style.transitionDuration = '0.5s'
    experts.style.transitionDelay = '0.8s'
    setTimeout(() => {
        founders.classList.remove('hidden_up');
        directors.classList.remove('hidden_side');
        experts.classList.remove('hidden_down');
    }, 3000);
});

home.addEventListener('focus', hide_acc);