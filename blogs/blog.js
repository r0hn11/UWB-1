let blog_section = document.querySelector(`.blog_content`);
let body = document.getElementsByTagName(`body`)[0];
let shr_btn = document.querySelectorAll('.share_btn');
let np_wrap = document.querySelector('.no_post_wrap');
let ap_parent = document.querySelector('.add_post_par');
let ap_main = document.querySelector('.add_post');
let publish_btn = document.querySelector('.publish');
let cancel_btn = document.querySelector('.cancel_b');
let home = document.querySelector('.breadcrumb .home a');
let blog_container = document.querySelector('.blog_cards_container');
let lmr_btn = document.querySelector('#load_more');
let cards = document.querySelectorAll('.blog_card');
let new_div = document.querySelector('.new');
let login_flag = document.querySelector('.flag');


np_wrap.style.opacity = '0';
function show_np_img(){
    setTimeout(() => {
        np_wrap.style.opacity = '1';
    }, 3000);
}
function show_btn(){
    // blank
}

function np_min_hght(){
    if(window.innerHeight>body.offsetHeight){
        blog_section.style.minHeight = `${blog_section.offsetHeight+window.innerHeight-document.getElementsByTagName('body')[0].offsetHeight}px`;
    }
    else blog_section.style.minHeight = 'unset';
}

let prev_scroll;
let ap_flag = 0;
let hght = ap_main.offsetHeight;
ap_parent.style.height = '0px';
ap_main.style.opacity = '0';
ap_main.style.display = 'none';

function open_ap(){
    if(login_flag.innerText === '1'){
        ap_main.style.display = 'flex';
        prev_scroll = window.scrollY;
        ap_parent.style.height = hght+100+'px';
        setTimeout(() => {
            ap_main.style.opacity = '1';
            document.documentElement.scrollTop = ap_main.offsetTop;
        }, 500);
        menuClose();
        ap_flag = 1;
    }
    else{
        window.location.href = '../user_signup/user-signup.html';
    }
}
function close_ap(){
    setTimeout(() => {
        document.documentElement.scrollTop = prev_scroll;
    }, 700);
    ap_parent.style.height = '0px';
    ap_main.style.opacity = '0';
    setTimeout(() => {
        ap_main.style.display = 'none';
    }, 500);
    ap_flag = 0;
}
function toggle_ap(){
    if(ap_flag === 0){open_ap();}
    else{close_ap();}
}



function np_msg_stat(){
    if(blog_container.childElementCount > 0){
        np_wrap.style.display = 'none';
    }
    else np_wrap.style.display = 'flex';
}

function show_ld_mr(){
    if(window.innerWidth>1200 && blog_container.childElementCount>18){
        lmr_btn.style.display = 'flex';
    }
    else if((window.innerWidth<1200 && window.innerWidth>700) && blog_container.childElementCount>14){
        lmr_btn.style.display = 'flex';
    }
    else if((window.innerWidth<700 && window.innerWidth>0) && blog_container.childElementCount>10){
        lmr_btn.style.display = 'flex';
    }
    else lmr_btn.style.display = 'none';
}


let arr_of_cards=Array.from(cards);
let reverse_arr=arr_of_cards.reverse();
let cards_count = blog_container.childElementCount;;
reverse_arr.forEach(element => {
    element.style.opacity = '0';
});
function show_cards(){
    let card_delay = 0;
    cards_count = blog_container.childElementCount;
    for(let i = 0; i<cards_count; i++){
        reverse_arr[i].style.transitionDelay = card_delay+0.1*(i+1)+'s';
        setTimeout(() => {
            reverse_arr[i].style.opacity = '1';
        }, 3000);
    }
}

window.onload = function(){
    let j;
    for(j=0; j<reverse_arr.length; j++){
        blog_container.appendChild(reverse_arr[j]);
    }
}


let removed_arr = [];
function maintain_count(){
    if(window.innerWidth >=1200 && blog_container.childElementCount>18){
        while(blog_container.childElementCount!=18){
            removed_arr.push(blog_container.lastElementChild);
            blog_container.removeChild(blog_container.lastElementChild);
        }
    }
    else if((window.innerWidth >= 700 && window.innerWidth < 1200) && blog_container.childElementCount>14){
        while(blog_container.childElementCount!=14){
            removed_arr.push(blog_container.lastElementChild);
            blog_container.removeChild(blog_container.lastElementChild);
        }
    }
    else if((window.innerWidth>0 && window.innerWidth<700) && blog_container.childElementCount>10){
        while(blog_container.childElementCount!=10){
            removed_arr.push(blog_container.lastElementChild);
            blog_container.removeChild(blog_container.lastElementChild);
        }
    }
}

function maintain_count_rev(){
    if(window.innerWidth >=1200 && blog_container.childElementCount<=12){
        while(blog_container.childElementCount!=12){
            blog_container.appendChild(removed_arr[removed_arr.length-1]);
            removed_arr.pop();
        }
    }
    else if((window.innerWidth >= 700 && window.innerWidth < 1200) && blog_container.childElementCount<=10){
        while(blog_container.childElementCount!=10){
            blog_container.appendChild(removed_arr[removed_arr.length-1]);
            removed_arr.pop();
        }
    }
    else if((window.innerWidth>0 && window.innerWidth<700) && blog_container.childElementCount<=8){
        while(blog_container.childElementCount!=8){
            blog_container.appendChild(removed_arr[removed_arr.length-1])
            removed_arr.pop();
        }
    }
}


//----------------EVENTS
window.addEventListener('load', function(){
    np_min_hght();
    np_msg_stat();
    show_np_img();
    show_ld_mr();
    show_cards();
    maintain_count();
    maintain_count_rev();
});
window.addEventListener('resize', function(){
    np_min_hght();
    np_msg_stat();
    maintain_count();
    maintain_count_rev();
});
cancel_btn.addEventListener('click', close_ap);
shr_btn[0].addEventListener('click', open_ap);
home.addEventListener('focus', hide_acc);


