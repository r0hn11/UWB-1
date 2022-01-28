let body = document.querySelector('body');
let lists = document.querySelectorAll('.bl_list');
let bl_navigation = document.querySelector('.navigation_bl');
let date_spans = document.querySelectorAll('.dates');
let datewise_blogs = document.querySelectorAll('.datewise');
let pending_blogs = document.querySelectorAll('.pending_blogs');
// let pending_ttl = document.querySelectorAll('.options button')[0];
// let reviewed_ttl = document.querySelectorAll('.options button')[1];
let pending_ttl = document.querySelectorAll('.options a')[0];
let reviewed_ttl = document.querySelectorAll('.options a')[1];
let pending_list = document.querySelector('.pending_li');
let rev_list = document.querySelector('.reviewed_li');
let list_parent = document.querySelector('.lists');
let approve_btn = document.querySelector('#pass');
let reject_btn = document.querySelector('#reject');
let cn_reject = document.querySelector('#confirm_reject');
let rsn_box = document.querySelector('#reason');
let add_post = document.querySelector('#add_post');
let add_post_main = document.querySelector('#add_post_main');
let reveal = document.querySelector('#reveal');
let left_box = document.querySelector('.left');
let story_box = document.querySelector('.right_wrap');
let pending_card = document.querySelectorAll('.blog_card');
let readmores_new = document.querySelectorAll('.blog_card button');
let readmores_old = document.querySelectorAll('.result_card button');
let viewed_card = document.querySelectorAll('.result_card');
let scs_msg = document.querySelector('.sucs');
let menu_icon = document.querySelector('.menu_icon');
let select_box = document.querySelector('.select_post_par');
let cancel_bl = document.querySelector('.cancel_b');
let rdm = document.querySelectorAll('.blog_card button');

let rdm_1 = document.querySelector('.blog_card button');
let rdm_2 = document.querySelector('.result_card button');

let add_post_parent = document.querySelector('.add_post_par');

let today = new Date;

function sethgt(){
    body.style.height = window.innerHeight + 'px';
    lists[0].style.height = window.innerHeight - bl_navigation.offsetHeight +'px';
    lists[1].style.height = window.innerHeight - bl_navigation.offsetHeight +'px';    
}

let month_list = {
    1 : 'january',
    2 : 'february',
    3 : 'march',
    4 : 'april',
    5 : 'may',
    6 : 'june',
    7 : 'july',
    8 : 'august',
    9 : 'september',
    10 : 'october',
    11 : 'november',
    12 : 'december'
}
let month = month_list[today.getMonth()+1];

date_spans[0].innerHTML = today.getDate() + ' ' + month + ' ' + today.getFullYear();
date_spans[1].innerHTML = today.getDate()-1 + ' ' + month + ' ' + today.getFullYear();
for(let i =0;i<pending_blogs.length;i++){
    if(pending_blogs[i].childElementCount === 0){datewise_blogs[i].style.display = 'none';}
}

function switch_to_list1(){
    pending_ttl.classList.add('active_list');
    reviewed_ttl.classList.remove('active_list');
    list_parent.style.transform = 'translateX(0)';
}

let wd = getComputedStyle(left_box);
function switch_to_list2(){
    reviewed_ttl.classList.add('active_list');
    pending_ttl.classList.remove('active_list');
    list_parent.style.transform = `translateX(-${wd.getPropertyValue('--wd')})`;
}

function pass(){
    story_box.classList.add('inactive2');
    scs_msg.classList.remove('inactive2');
    setTimeout(() => {
        scs_msg.classList.add('inactive2');
        show_sel_msg();
    }, 2000);
}
function reject(){
    approve_btn.classList.toggle('shrink');
    reject_btn.classList.toggle('reas');
    rsn_box.classList.toggle('inactive2');
    cn_reject.classList.toggle('inactive2');
}
function reject_cancel(){
    approve_btn.classList.remove('shrink');
    reject_btn.classList.remove('reas');
    rsn_box.classList.add('inactive2');
    cn_reject.classList.add('inactive2');
    reject_btn.removeEventListener('click', reject_cancel);
}

function set_status(card_number, status){
    if(status===1){viewed_card[card_number-1].style.setProperty('--status','var(--valid-bg)');}
    if(status===0){viewed_card[card_number-1].style.setProperty('--status','var(--warn-bg)');}
}



let story_ttl = document.querySelector('.blog_complete .ttl_page');


function show_story(card_number){
    story_box.classList.remove('inactive2');
    close_menu();
    reject_cancel();
    fix_positions();
    close_add_story();
}

function show_sel_msg(){
    if(!story_box.classList.contains('inactive2') || !add_post_parent.classList.contains('inactive2')){
        select_box.classList.add('inactive2');
    }
    else    select_box.classList.remove('inactive2');
}

function fix_positions(){
    reject_cancel();
    approve_btn.style.transform = 'translateY(0)';
    reject_btn.style.transform = 'translateY(0)';
    add_post.style.transform = 'translateY(0)';
    cn_reject.style.transform = 'translateY(0)';
    rsn_box.style.transform = 'translateX(0)';
    reveal.style.transform = 'rotate(0deg)';
    approve_btn.style.opacity = '1';
    reject_btn.style.opacity = '1';
    rvl_flag = 0;
}

let btn_arr = document.querySelectorAll('.buttons button');
let rvl_flag = 0;
function responsive_buttons(){
    if(window.innerWidth<=600){
        approve_btn.style.opacity = '0';
        reject_btn.style.opacity = '0';
        if(rvl_flag === 0){
            reject_btn.style.opacity = '1';
            reject_btn.style.transform = 'translateY(-60px)';
            approve_btn.style.opacity = '1';
            approve_btn.style.transform = 'translateY(-110px)';
            add_post.style.opacity = '1';
            add_post.style.transform = 'translateY(-160px)';
            cn_reject.style.transform = 'translateY(-215px)';
            rsn_box.style.transform = 'translateY(-260px)';
            reveal.style.transform = 'rotate(180deg)';
            rvl_flag = 1;
        }
        else if(rvl_flag === 1){
            reject_cancel();
            approve_btn.style.opacity = '0';
            approve_btn.style.transform = 'translateY(0)';
            reject_btn.style.opacity = '0';
            reject_btn.style.transform = 'translateY(0)';
            add_post.style.opacity = '0';
            add_post.style.transform = 'translateY(0)';
            cn_reject.style.transform = 'translateY(0)';
            rsn_box.style.transform = 'translateX(0)';
            reveal.style.transform = 'rotate(0deg)';
            rvl_flag = 0;
        }
    }
}

function show_add_story(){
    fix_positions();
    close_menu();
    add_post_parent.classList.remove('inactive2');
    story_box.classList.add('inactive2');
    add_post_main.style.transform = 'rotate(135deg)'
    add_post_main.addEventListener('click', close_add_story);
}

function close_add_story(){
    add_post_parent.classList.add('inactive2');
    add_post_main.style.transform = 'rotate(0deg)'
    add_post_main.removeEventListener('click', close_add_story);
    show_sel_msg();
}

add_post.addEventListener('click', show_add_story);
add_post_main.addEventListener('click', show_add_story);
cancel_bl.addEventListener('click', close_add_story);




window.addEventListener('load' , function(){
    sethgt();
    show_sel_msg();
    fix_positions();
    responsive_buttons();
});
window.addEventListener('resize' , function(){
    sethgt();
    show_sel_msg();
    fix_positions();
    responsive_buttons();
});
pending_ttl.addEventListener('click', switch_to_list1);
reviewed_ttl.addEventListener('click', switch_to_list2);
approve_btn.addEventListener('click', pass);
reject_btn.addEventListener('click', reject);
reveal.addEventListener('click', responsive_buttons);

readmores_new.forEach(e => {
    e.addEventListener('click', show_story);
});
readmores_old.forEach(e => {
    e.addEventListener('click', show_story);
});





// RESPONSIVE
let bars = document.querySelectorAll('.bars');
let flag = 0 ;
function close_menu(){
    left_box.classList.add('hideleft');
    bars[0].style.transform = 'rotate(0)';
    bars[1].style.transform = 'scaleX(1)';
    bars[2].style.transform = 'rotate(0)';
    flag = 0;
}
function open_menu(){
    left_box.classList.remove('hideleft');
    bars[0].style.transform = 'rotate(-45deg)';
    bars[1].style.transform = 'scaleX(0)';
    bars[2].style.transform = 'rotate(45deg)';
    flag = 1;
}
function toggle_menu(){
    if(flag===1){close_menu();}
    else if(flag===0){open_menu();}
}

menu_icon.addEventListener('click' ,toggle_menu);



setInterval(() => {
    if(document.activeElement === rdm_2){
        switch_to_list2();
    }
    if(document.activeElement === rdm_1){
        switch_to_list1();
    }
}, 10);


