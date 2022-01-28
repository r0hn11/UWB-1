let db_parent = document.querySelector('.db_wrap_par');
let np_msg =  document.querySelector('.no_post_msg');
let tbl_par =  document.querySelector('.blogs_table');
let tbl = document.querySelector('.blogs_table table');
let _inputs = document.querySelectorAll('.db_wrap_par input');
let edit_prof = document.querySelector('.edit');
let save_prof = document.querySelector('.save');
let cancel_prof = document.querySelector('.cancel');
let profile = document.querySelector('.profile');
let edit_avatar = document.querySelector('.db_wrap .main_db .profile .ed_avt');
let edit_avatar_menu = document.querySelector('.edit_avatars');
let edit_avatar_cancel = document.querySelector('.ea_cncl');
let avatars = document.querySelectorAll('.ea_icons');
let input_spans = document.querySelectorAll('.edit_value');
let close_btn = document.querySelector('.fa-times');
let profile_pic = document.querySelector('.profile_picture');

let name = document.getElementById('user_name');
let from = document.getElementById('user_from');
let bio = document.getElementById('user_bio');
let mail = document.getElementById('user_mail');

let avatars_icons = document.querySelectorAll('.avatars');


function rowcheck(){
    if(tbl.rows.length > 1){
        tbl_par.style.display = 'flex';
        np_msg.style.display = 'none';
    }
    if(tbl_par.offsetHeight>180){
        tbl_par.style.overflowY = 'auto';
    }
}

function allow_edit_profile(){
    edit_prof.style.display = 'none';
    save_prof.style.display = 'inline';
    cancel_prof.style.display = 'inline';
    edit_avatar.classList.remove('inactive2');
    _inputs.forEach(e => {
        e.style.display = 'inline';
    });
    _inputs[0].value = name.innerHTML;
    _inputs[1].value = from.innerHTML;
    _inputs[2].value = bio.innerHTML;
    input_spans.forEach(e => {
        e.style.display = 'none';
    });
    input_spans[3].style.display = 'inline';
}
function add_avatar(){
    let del = 0;
    edit_avatar_menu.classList.remove('inactive2');
    edit_avatar_cancel.addEventListener('click', function(){
        edit_avatar_menu.classList.add('inactive2');
        avatars_icons.forEach(e => {
            e.style.opacity = '0';
            e.style.transitionDelay = '0s';
        });
    });
    for(let ic=0; ic<avatars_icons.length;ic++){
        avatars_icons[ic].style.opacity = '1';
        avatars_icons[ic].style.transitionDelay = del+'s';
        del = del+ic*0.05;
    }
    set_avatar();
    setTimeout(() => {
        avatars_icons.forEach(e => {
            e.style.transitionDelay = '0s';
        });
    }, avatars_icons.length/10 + 0.5);
}

let default_avatar = profile_pic.src;
let new_default_avatar = profile_pic.src;
function set_avatar(){
    for(let i=0;i<avatars_icons.length;i++){
        avatars_icons[i].addEventListener('click', function(){
            edit_avatar_menu.classList.add('inactive2');
            avatars_icons.forEach(e => {
                e.style.opacity = '0';
                e.style.transitionDelay = '0s';
            });
            profile_pic.src = `../common_images/avatars/av${i+1}.png`;
            new_default_avatar = profile_pic.src;
        });
    }
}
function save_edit_profile(){
    profile_pic.src = new_default_avatar;
    avatar_main.src = new_default_avatar;
    default_avatar = new_default_avatar;
    name_on_card.innerText = _inputs[0].value;
    name.innerHTML = _inputs[0].value;
    from.innerHTML = _inputs[1].value;
    bio.innerHTML = _inputs[2].value;
    edit_prof.style.display = 'inline';
    save_prof.style.display = 'none';
    cancel_prof.style.display = 'none';
    edit_avatar.classList.add('inactive2');
    _inputs.forEach(e => {
        e.style.display = 'none';
    });
    input_spans.forEach(e => {
        e.style.display = 'inline';
    });
    if(name.innerText === '-'){name_on_card.innerText = 'Signed out'; name_on_card.classList.remove('new_name');}
    else{name_on_card.innerText = name.innerHTML; name_on_card.classList.add('new_name');}
}
function cancel_edit_profile(){
    profile_pic.src = default_avatar;
    edit_prof.style.display = 'inline';
    save_prof.style.display = 'none';
    cancel_prof.style.display = 'none';
    edit_avatar.classList.add('inactive2');
    _inputs.forEach(e => {
        e.style.display = 'none';
    });
    input_spans.forEach(e => {
        e.style.display = 'inline';
    });
    edit_avatar_menu.classList.add('inactive2');
    avatars_icons.forEach(e => {
        e.style.opacity = '0';
        e.style.transitionDelay = '0s';
    });
}

function close_db(){
    db_parent.classList.add('inactive2');
    cancel_edit_profile();
}
function open_db(){
    db_parent.classList.remove('inactive2');
}

window.addEventListener('load',rowcheck);
edit_prof.addEventListener('click', allow_edit_profile);
save_prof.addEventListener('click', save_edit_profile);
cancel_prof.addEventListener('click', cancel_edit_profile);
edit_avatar.addEventListener('click', add_avatar);
close_btn.addEventListener('click', close_db);
manage_db.addEventListener('click', open_db);

window.addEventListener('resize',function(){
    if(window.innerWidth>630) {extra_pad = 15;}
    else {extra_pad = 10;}
    db_parent.style.paddingTop = `${navbar.offsetHeight+extra_pad}px`;
});
window.addEventListener('load',function(){
    if(window.innerWidth>600) extra_pad = 15;
    else extra_pad = 10;
    db_parent.style.paddingTop = `${navbar.offsetHeight+extra_pad}px`;
});
window.addEventListener('scroll', function(){
    if(window.innerWidth>600) extra_pad = 15;
    else extra_pad = 10;
    db_parent.style.paddingTop = `${navbar.offsetHeight+extra_pad}px`;
});
(document.querySelector('#auth_login a')).addEventListener('focus', close_db);
(document.querySelector('#usr_login a')).addEventListener('focus', close_db);  
account.addEventListener('click',close_db) ;
menu_btn.addEventListener('click', close_db);
