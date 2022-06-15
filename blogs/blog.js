let blog_section = document.querySelector(`.blog_content`);
let body = document.getElementsByTagName(`body`)[0];
let shr_btn = document.querySelectorAll('.share_btn');
let np_wrap = document.querySelector('.no_post_wrap');
let ap_parent = document.querySelector('.add_post_par');
let ap_main = document.querySelector('.add_post');
let publish_btn = document.querySelector('.publish');
let cancel_btn = document.querySelector('.cancel_b');
let breadcrumb = document.querySelector('.breadcrumb');
let home = document.querySelector('.breadcrumb .home a');
let blog_container = document.querySelector('.blog_cards_container');
let lmr_btn = document.querySelector('#load_more');
let cards = document.querySelectorAll('.blog_card');
let new_div = document.querySelector('.new');
let login_flag = document.querySelector('.flag');

let view_story_par = document.querySelector('.view_story_par');
let view_story = document.querySelector('.view_story');
let backtoblogs = document.querySelector('.view_story .backbtn');
blogs_list = document.querySelectorAll('.blog_card')

backtoblogs.onclick = function(){
    view_story_par.classList.add('inactive2');
    if(window.innerWidth <=650){
        navbar_par.style.transform = 'translateY(0%)'
    }
}

blogs_list.forEach(element=>{
    element.onclick = function(){
        if(window.innerWidth <=650){
            navbar_par.style.transform = 'translateY(-100%)'
        }
        view_story_par.classList.remove("inactive2");
        view_story.childNodes[3].innerHTML = element.childNodes[1].innerHTML;
        view_story.childNodes[5].innerHTML = element.childNodes[3].innerHTML;
        view_story.childNodes[7].innerHTML = element.childNodes[5].innerHTML;
        view_story.childNodes[11].innerHTML = element.childNodes[7].innerHTML;
        view_story.childNodes[15].innerHTML = element.childNodes[9].innerHTML;
    }
});



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
        ap_main.style.position = 'relative'
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

// function show_ld_mr(){
//     if(window.innerWidth>1200 && blog_container.childElementCount>18){
//         lmr_btn.style.display = 'flex';
//     }
//     else if((window.innerWidth<1200 && window.innerWidth>700) && blog_container.childElementCount>14){
//         lmr_btn.style.display = 'flex';
//     }
//     else if((window.innerWidth<700 && window.innerWidth>0) && blog_container.childElementCount>10){
//         lmr_btn.style.display = 'flex';
//     }
//     else lmr_btn.style.display = 'none';
// }




let arr_of_cards=Array.from(cards);
let reverse_arr=arr_of_cards.reverse();
let cards_count = blog_container.childElementCount;
reverse_arr.forEach(element => {
    element.style.opacity = '0';
});
function show_cards(){
    let card_delay = 0;
    cards_count = blog_container.childElementCount;
    for(let i = 0; i<cards_count; i++){
        reverse_arr[i].style.transitionDelay = card_delay+0.05*(i+1)+'s';
        setTimeout(() => {
            reverse_arr[i].style.opacity = '1';
        }, 3000);
    }
}

window.onload = function(){
    for(let i=0;i<reverse_arr.length;i++){
        blog_container.appendChild(reverse_arr[i])
    }
    if(reverse_arr.length>12){
        for(let i=12;i<reverse_arr.length;i++){
            blog_container.children[i].style.display = 'none'
        }
        lmr_btn.style.display = 'flex'
    }
    else{lmr_btn.style.display = 'none'}
}

// displaying next blogs
let value = 12
lmr_btn.onclick = function(){
    for(let i=value;i<value+3;i++){
        if(blog_container.children[i] != undefined){
            blog_container.children[i].style.display = 'flex'
        }
    }
    value += 3
    if(value>reverse_arr.length){lmr_btn.style.display = 'none'}
    else{lmr_btn.style.display = 'flex'}
}


// let removed_arr = [];
// function maintain_count(){
//     if(window.innerWidth >=1200 && blog_container.childElementCount>18){
//         while(blog_container.childElementCount!=18){
//             removed_arr.push(blog_container.lastElementChild);
//             blog_container.removeChild(blog_container.lastElementChild);
//         }
//     }
//     else if((window.innerWidth >= 700 && window.innerWidth < 1200) && blog_container.childElementCount>14){
//         while(blog_container.childElementCount!=14){
//             removed_arr.push(blog_container.lastElementChild);
//             blog_container.removeChild(blog_container.lastElementChild);
//         }
//     }
//     else if((window.innerWidth>0 && window.innerWidth<700) && blog_container.childElementCount>10){
//         while(blog_container.childElementCount!=10){
//             removed_arr.push(blog_container.lastElementChild);
//             blog_container.removeChild(blog_container.lastElementChild);
//         }
//     }
// }

// function maintain_count_rev(){
//     if(removed_arr.length > 2){
//         if(window.innerWidth >=1200 && blog_container.childElementCount<=18){
//             while(blog_container.childElementCount!=18){
//                 blog_container.appendChild(removed_arr[removed_arr.length-1]);
//                 removed_arr.pop();
//             }
//         }
//         else if((window.innerWidth >= 700 && window.innerWidth < 1200) && blog_container.childElementCount<=14){
//             while(blog_container.childElementCount!=14){
//                 blog_container.appendChild(removed_arr[removed_arr.length-1]);
//                 removed_arr.pop();
//             }
//         }
//         else if((window.innerWidth>0 && window.innerWidth<700) && blog_container.childElementCount<=10){
//             while(blog_container.childElementCount!=10){
//                 blog_container.appendChild(removed_arr[removed_arr.length-1])
//                 removed_arr.pop();
//             }
//         }
//     }
// }


//----------------EVENTS
window.addEventListener('load', function(){
    np_min_hght();
    np_msg_stat();
    show_np_img();
    // show_ld_mr();
    show_cards();
    // maintain_count();
    // maintain_count_rev();
    //rename();
});
window.addEventListener('resize', function(){
    np_min_hght();
    np_msg_stat();
    // maintain_count();
    // maintain_count_rev();
});
cancel_btn.addEventListener('click', close_ap);
shr_btn[0].addEventListener('click', open_ap);
home.addEventListener('focus', hide_acc);



let url = window.location.href;

let arr = [];
for(let b=0;b<url.length;b++){
    arr.push(url[b]);
}
let url_rev = arr.reverse();
let filename = [];
let file_name_final = [];
let str_path = '';
function getfilename(){
    for(let i=0;i<url.length;i++){
        if(url_rev[i] !== '/'){
            filename.push(url_rev[i]);
        }
        else{
            break;
        }
    }
    file_name_final = filename.reverse();
    
    for(let n =0;n<file_name_final.length;n++){
        str_path += file_name_final[n];
    }
}
// let login_name;
// let final_usrname;
// function rename(){
//     if(str_path === "blog-home.php"){
//         login_name = document.getElementById('loginstat');
//     }
//     final_usrname = login_name.innerText;
//     rename_all();
// }

// function rename_all(){
//     name_on_card.innerText = final_usrname;
// }


// search algorithm
let searchbar = document.querySelector('.search_par #searchbar')
let search_icon = document.querySelector('.search_par svg')
let no_res = document.querySelector('#no_results')


searchbar.oninput = ()=>{
    lmr_btn.style.display = 'none'
    reverse_arr.forEach(element => {
        element.style.display = 'none'
    });
    if(searchbar.value == '' || searchbar.value == undefined){
        reverse_arr.forEach(element => {
            element.style.display = 'flex'
        });
        lmr_btn.style.display = 'flex'
    }
    let result_count = 0
    for(let i =0;i<reverse_arr.length;i++){
        isPresent = reverse_arr[i].children[0].innerHTML.toLowerCase().includes(searchbar.value)
        if(isPresent){
            reverse_arr[i].style.display = 'flex'
            no_res.style.display = 'none'
            result_count ++
        }
        else if(!isPresent){
            reverse_arr[i].style.display = 'none'
        }
    }
    if(result_count!=0){no_res.style.display = 'none'}
    else{no_res.style.display = 'flex'}
}