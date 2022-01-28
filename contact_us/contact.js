let contact_sect = document.querySelector(`.contact_main`);
let body = document.getElementsByTagName(`body`)[0];
function np_min_hght(){
    if(window.innerHeight>body.offsetHeight){
        contact_sect.style.minHeight = `${contact_sect.offsetHeight+window.innerHeight-document.getElementsByTagName('body')[0].offsetHeight}px`;
    }
    else contact_sect.style.minHeight = 'unset';
}

//----------------EVENTS
window.addEventListener('load', np_min_hght);
window.addEventListener('resize', np_min_hght);