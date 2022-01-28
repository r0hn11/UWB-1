
let arr = document.querySelectorAll('.pr_card');

for(let i =0;i<arr.length;i++){
    let del = 0;
    arr[i].style.transitionDuration = '0.4s';
    arr[i].style.transitionDelay = `${del+i/10+0.2}s`;
    window.addEventListener('load', function(){
        setTimeout(() => {
            arr[i].classList.remove('hidden_side');
        }, 3000);
        setTimeout(() => {
            arr[i].style.transitionDelay = '0s';
        }, 5000);
    });
}
    

let profiles = document.querySelector(`.profiles`);
let body = document.getElementsByTagName(`body`)[0];
function np_min_hght(){
    if(window.innerHeight>body.offsetHeight){
        profiles.style.minHeight = `${profiles.offsetHeight+window.innerHeight-document.getElementsByTagName('body')[0].offsetHeight}px`;
    }
    else profiles.style.minHeight = 'unset';
}

//----------------EVENTS
window.addEventListener('load', np_min_hght);
window.addEventListener('resize', np_min_hght);