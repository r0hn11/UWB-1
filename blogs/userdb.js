let sidebar = document.querySelector('.sidebar');
let open_menu = document.querySelector('.open_menu');
let usrname_init = document.querySelector('.sidebar .user .name');
let tabs = document.querySelectorAll('.sidebar .links>li');
let card_container = document.querySelector('.card_container');
let no_post = document.querySelector('.no_post');
let card_arr = document.querySelectorAll('.card_container>.blog_card')
let status_arr = document.querySelectorAll('.card_container .blog_card .status>span');
let filters = document.querySelectorAll('.filters>.filter');
let blogs = document.querySelectorAll('.card_container .blog_card');
let blog_msg = document.querySelector('.card_container .blog_msg');
let view_story_par = document.querySelector('.view_story_par');
let view_story = document.querySelector('.view_story');
let backtoblogs = document.querySelector('.view_story .backbtn');
let add_post_box = document.querySelector('.add_post_par');
let add_post_btn = document.querySelector('.add_btn');
let titlebar = document.querySelector('.card_container_par .ttl');
let cancel_add = document.querySelector('.add_post .cancel_b');

let profile_section = document.querySelector('.profile_section');
let blog_section = document.querySelector('.card_container_par');

let editbtn =document.getElementById('edit');
let savebtn =document.getElementById('save');
let cancelbtn =document.getElementById('cancel');
let avatar_icon = document.querySelector('.profile_main .img_par img');
let editimg_overlay = document.querySelector('.profile_main .img_par .editimg');
let avatar_list = document.querySelector('.profile_main .img_par .avatar_list');

let static_name = document.querySelector('.uname_par span');
let static_location = document.querySelector('.uloc_par span');
let static_bio = document.querySelector('.ubio_par span');
let input_name = document.querySelector('.uname_par input');
let input_location = document.querySelector('.uloc_par input');
let input_bio = document.querySelector('.ubio_par textarea');

let avatars = document.querySelectorAll('.profile_main .img_par .avatar_list li img');

let statics =[static_name, static_location, static_bio];
let inputs = [input_name, input_location, input_bio];

///////////////////////////////////////////////////////////

tabs[0].classList.add('active_tab');
for(let i=0;i<status_arr.length;i++){
    if((status_arr[i].innerHTML).toLowerCase() === "pending"){
        status_arr[i].style.color = "var(--pending)";
    }
    if((status_arr[i].innerHTML).toLowerCase() === "rejected"){
        status_arr[i].style.color = "var(--rejected)";
    }
    if((status_arr[i].innerHTML).toLowerCase() === "approved"){
        status_arr[i].style.color = "var(--approved)";
        // card_arr[i].style.borderColor = "var(--approved)";
    }
}

blogs.forEach(element => {
    if(element.childNodes[9].childNodes[1].innerHTML === "pending"){element.style.borderColor = "var(--pending)";}
    if(element.childNodes[9].childNodes[1].innerHTML === "approved"){element.style.borderColor = "var(--approved)";}
    if(element.childNodes[9].childNodes[1].innerHTML === "rejected"){element.style.borderColor = "var(--rejected)";}
});


///////////////////////////////////////////////////////////
usrname_init.innerHTML = statics[0].innerHTML
let usrname_full = usrname_init.innerHTML;
let init1 = usrname_full.split(" ");
function setname(){
    if(window.innerWidth<651){
        usrname_init.innerHTML = init1[0][0].toUpperCase();
        if(init1.length > 1){usrname_init.innerHTML+=init1[1][0].toUpperCase();
            if(init1.length > 2){usrname_init.innerHTML+=init1[2][0].toUpperCase();
                if(init1.length > 3){usrname_init.innerHTML+=init1[3][0].toUpperCase();
                    if(init1.length > 4){usrname_init.innerHTML+=init1[4][0].toUpperCase();
                        if(init1.length > 5){usrname_init.innerHTML+=""}
                    }
                }
            }
        }
    }
    else{
        usrname_init.innerHTML = usrname_full;
    }
}

function toggle_menu(){
    if(window.innerWidth>1000){
        sidebar.style.transform = "translateX(0)";
    }
    else{
        sidebar.style.transform = "translateX(-100%)";
        setTimeout(() => {
            open_menu.style.opacity = "1";
        }, 400);
    }
}

function show_np_msg(){
    if(card_container.childElementCount>1){
        no_post.style.display = "none";
        filters[0].parentElement.style.display = "flex";
    }
    else{
        no_post.style.display = "flex";
        filters[0].parentElement.style.display = "none";
    }
}

let pend_arr = [];
let appr_arr = [];
let rej_arr = [];

filters[0].onclick = function filter_search(){
    blogs.forEach(element => {
        element.style.display = "flex";
    });
    blog_msg.style.display = "none";
}
filters[1].onclick = function filter_search(){
    appr_arr = [];
    blogs.forEach(element => {
        if(element.childNodes[9].childNodes[1].innerHTML.toLowerCase() === "approved"){
            element.style.display = "flex";
            appr_arr.push(element);
        }
        else{element.style.display = "none";}

        if(appr_arr.length<1){
            blog_msg.style.display = "flex";
            blog_msg.childNodes[1].innerHTML = "Approved"
        }
        else{
            blog_msg.style.display = "none";
        }
    });
}
filters[2].onclick = function filter_search(){
    pend_arr = [];
    blogs.forEach(element => {
        if(element.childNodes[9].childNodes[1].innerHTML.toLowerCase() === "pending"){
            element.style.display = "flex";
            pend_arr.push(element);
        }
        else{element.style.display = "none";}

        if(pend_arr.length<1){
            blog_msg.style.display = "flex";
            blog_msg.childNodes[1].innerHTML = "Pending"
        }
        else{
            blog_msg.style.display = "none";
        }
    });
}
filters[3].onclick = function filter_search(){
    rej_arr = [];
    blogs.forEach(element => {
        if(element.childNodes[9].childNodes[1].innerHTML.toLowerCase() === "rejected"){
            element.style.display = "flex";
            rej_arr.push(element);
        }
        else{element.style.display = "none";}

        if(rej_arr.length<1){
            blog_msg.style.display = "flex";
            blog_msg.childNodes[1].innerHTML = "Rejected"
        }
        else{
            blog_msg.style.display = "none";
        }
    });
}

backtoblogs.onclick = function(){
    view_story_par.classList.add('inactive2');
}

blogs.forEach(element=>{
    element.onclick = function(){
        view_story_par.classList.remove("inactive2");
        view_story.childNodes[3].innerHTML = `<span id="indicator_main"></span>${element.childNodes[1].innerHTML}`;
        view_story.childNodes[5].innerHTML = element.childNodes[3].innerHTML;
        view_story.childNodes[9].innerHTML = element.childNodes[5].innerHTML;
        view_story.childNodes[13].innerHTML = element.childNodes[7].innerHTML;
        document.getElementById("indicator_main").style.background = element.childNodes[9].childNodes[1].style.color;
    }
});

function open_add_post(){
    add_post_box.classList.remove("inactive2");
    add_post_btn.style.opacity = '0';
    titlebar.style.transform = "translateY(-100%)";
}
function close_add_post(){
    add_post_box.classList.add("inactive2");
    add_post_btn.style.opacity = '1';
    titlebar.style.transform = "translateY(0)";
}

add_post_btn.onclick = open_add_post;
cancel_add.onclick = close_add_post;

///////////////////////////////////////////////////////////

open_menu.onclick = function(){
    sidebar.style.transform = "translateX(0)";
    open_menu.style.opacity = "0";
}

tabs[0].onclick = function(){
    for(let i=0;i<tabs.length;i++){
        tabs[i].classList.remove('active_tab');
    }
    tabs[0].classList.add('active_tab');
    toggle_menu();
    profile_section.classList.add('inactive2');
    blog_section.classList.remove('inactive2');
    cancel_edit();
}
tabs[1].onclick = function(){
    for(let i=0;i<tabs.length;i++){
        tabs[i].classList.remove('active_tab');
    }
    tabs[1].classList.add('active_tab');
    toggle_menu();
    profile_section.classList.remove('inactive2');
    blog_section.classList.add('inactive2');
    close_add_post();
}

tabs[3].onclick = function(){
    sidebar.style.transform = "translateX(-100%)";
    setTimeout(() => {
        open_menu.style.opacity = "1";
    }, 400);
}

///////////////////////////////////////////////////////////
function edit_profile(){
    savebtn.style.display = "flex";
    cancelbtn.style.display = "flex";
    editbtn.style.display = "none";
    editimg_overlay.style.opacity = "1";

    for(let i=0;i<3;i++){
        statics[i].style.display = "none";
        inputs[i].style.display = "flex";
        inputs[i].value = statics[i].innerHTML;
    }

    editimg_overlay.onclick = function(){
        avatar_list.classList.toggle("inactive2");
        avatars.forEach(element => {
            element.onclick = function(){
                avatar_icon.src = element.src;
                avatar_list.classList.add("inactive2");
            }
        });
    }
}
let prev_avatar = avatar_icon.src;
function cancel_edit(){
    savebtn.style.display = "none";
    cancelbtn.style.display = "none";
    editbtn.style.display = "flex";
    editimg_overlay.style.opacity = "0";

    statics.forEach(element => {
        element.style.display = "flex" ;
     });
    inputs.forEach(element => {
       element.style.display = "none" ;
    });

    avatar_icon.src = prev_avatar;
}
editbtn.onclick = edit_profile;
cancelbtn.onclick = cancel_edit;


///////////////////////////////////////////////////////////

window.onload = function(){
    setname();
    toggle_menu();
    show_np_msg();  
}

window.onresize = function(){
    setname();
    toggle_menu();  
}


