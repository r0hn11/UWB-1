
//----------------PRELOADER
let loader = document.querySelector('.preloader');
let bdy = document.getElementsByTagName('body')[0];

bdy.style.overflowY = 'hidden';
window.addEventListener('load' ,function(){
    window.scrollTo({top:0, behavior: "smooth"});
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => {
            loader.style.display = 'none';
            bdy.style.overflowY = 'auto';
        }, 500);
    }, 2500);
});


//----------------ELEMENTS
let menu = document.querySelector('.menu_mini');
let menu_links = document.querySelectorAll('.menu_links');
let menu_btn = document.querySelector('.menu_icon');
let menu_bar = document.querySelectorAll('.bars');
let team_menu = document.querySelector('.team_sub');
let team_links = document.querySelectorAll('.team_sub li a');
let blogs = document.querySelector('.menu_wide ul li:nth-of-type(3)>a');
let team_btn = document.querySelector('.menu_wide ul li:nth-of-type(4)>button');
let contact = document.querySelector('.menu_wide ul li:nth-of-type(5)>a');
let account = document.querySelector('.menu_wide ul li:nth-of-type(6)>button');
let m_team = document.querySelector('#m_team');
let brd = document.querySelector('#brd');
let acc_par = document.querySelector('.acc_par');
let acc_bg = document.querySelector('.acc_bg');
let navbar = document.querySelector('.menu_bar');
let navbar_par = document.querySelector('.navigation');
let icon_links = document.querySelector('.contacts ul li a');
let extra_links = document.querySelector('.extras ul li a');
let home_bcr = document.querySelector('.breadcrumb .home a');
let account_res = menu_links[6];
let no_post_box = document.querySelector('.no_post');
let shine = document.querySelector('.shine_btn');
let btt = document.querySelector('.btt');
let manage_db = document.querySelector('#mng button');
let avatar_main = document.querySelector('.avatar');
let name_on_card = document.getElementById('nameid');
let logo = document.querySelector('.logo_img');

//----------------FUNCTIONS
let menu_flag = 0;
function menuToggle(){
    if(menu_flag === 0){
        menu_bar[0].style.transform = 'rotate(-45deg)';
        menu_bar[1].style.transform = 'scaleX(0)';
        menu_bar[2].style.transform = 'rotate(45deg)';
        menu.style.transform = 'translateX(0)';
        menu.style.boxShadow = 'var(--prof-card-shdow)';
        let delay = 0.3;
        for(let i=0;i<menu_links.length;i++){
            delay += i*0.02;
            menu_links[i].style.opacity = '1';
            menu_links[i].style.transform = 'translateX(0)';
            menu_links[i].style.transitionDelay = `${delay}s`;
        }
        setTimeout(() => {
            menu_links.forEach(li => {
                li.style.transitionDelay = '0s';
            });
        }, delay);
        document.querySelector('.bar2').style.transitionDelay = '0s';
        menu_flag = 1;
    }
    else{
        menu_bar[0].style.transform = 'rotate(0deg)';
        menu_bar[1].style.transform = 'scaleX(1)';
        menu_bar[2].style.transform = 'rotate(0deg)';
        menu.style.transform = 'translateX(100%)';
        menu.style.boxShadow = 'none';
        menu_links.forEach(li => {
            li.style.opacity = '0';
            li.style.transitionDelay = '0s';
        }); 
        document.querySelector('.bar2').style.transitionDelay = '0.2s';
        menu_flag = 0;
    }
}
function menuOpen(){
    menu_bar[0].style.transform = 'rotate(-45deg)';
    menu_bar[1].style.transform = 'scaleX(0)';
    menu_bar[2].style.transform = 'rotate(45deg)';
    menu.style.transform = 'translateX(0)';
    menu.style.boxShadow = 'var(--prof-card-shdow)';
    let delay = 0.3;
    for(let i=0;i<menu_links.length;i++){
        delay += i*0.02;
        menu_links[i].style.opacity = '1';
        menu_links[i].style.transform = 'translateX(0)';
        menu_links[i].style.transitionDelay = `${delay}s`;
    }
    setTimeout(() => {
        menu_links.forEach(li => {
            li.style.transitionDelay = '0s';
        });
    }, delay);
    document.querySelector('.bar2').style.transitionDelay = '0s';
    menu_flag = 1;
}
function menuClose(){
    menu_bar[0].style.transform = 'rotate(0deg)';
    menu_bar[1].style.transform = 'scaleX(1)';
    menu_bar[2].style.transform = 'rotate(0deg)';
    menu.style.transform = 'translateX(100%)';
    menu.style.boxShadow = 'none';
    menu_links.forEach(li => {
        li.style.opacity = '0';
        li.style.transitionDelay = '0s';
    }); 
    document.querySelector('.bar2').style.transitionDelay = '0.2s';
    menu_flag = 0;
}
function toggle_team(){
    team_menu.classList.toggle('inactive');
}
function show_team(){
    team_menu.classList.remove('inactive');
}
function hide_team(){
    team_menu.classList.add('inactive');
}
function toggle_acc(){
    acc_par.classList.toggle('inactive2');
}
function show_acc(){
    acc_par.classList.remove('inactive2');
}
function hide_acc(){
    acc_par.classList.add('inactive2');
}

document.onclick = function(e){
    if(!acc_par.classList.contains('inactive2')){
        if(e.target.id !=='acc'){
            if(e.target.id !=='acc2'){
                if(e.target.id !== 'acc_wrapperid'){
                    if(e.target.id !== 'topid'){
                        if(e.target.id !== 'avatarid'){
                            if(e.target.id !== 'nameid'){
                                if(e.target.id !== 'acc_links'){
                                    if(e.target.id !== 'auth_login'){
                                        if(e.target.id !== 'usr_login'){
                                            acc_par.classList.add('inactive2');
                                        }
                                    }
                                }
                            }  
                        }              
                    }            
                }
            }
        }
    }
    if(!team_menu.classList.contains('inactive')){
        if(e.target.id !== 'team_drop'){
            if(e.target.id !== 'team_menu'){
                if(e.target.id !== 'm_team'){
                    if(e.target.id !== 'brd'){
                        team_menu.classList.add('inactive');
                    }
                }                
            }            
        }
    }
}

document.onscroll = function(){
    team_menu.classList.add('inactive');
    acc_par.classList.add('inactive2');
}

function nav_squish(){
    if(window.scrollY>50){
        navbar_par.style.boxShadow = 'var(--shdow)';
        if(window.innerWidth>900){
            navbar.style.paddingTop = '11px';
            navbar.style.paddingBottom = '11px';
        }
        if(window.innerWidth<=900 && window.innerWidth>700){
            navbar.style.paddingTop = '9px';
            navbar.style.paddingBottom = '9px';
        }
        if(window.innerWidth<=700 && window.innerWidth>450){
            navbar.style.paddingTop = '6px';
            navbar.style.paddingBottom = '6px';
        }
        if(window.innerWidth<=450){
            navbar.style.paddingTop = '4px';
            navbar.style.paddingBottom = '4px';
        }
    }
    else{
        navbar_par.style.boxShadow = 'none';
        if(window.innerWidth>900){
            navbar.style.paddingTop = 'var(--padd_v)';
            navbar.style.paddingBottom = 'var(--padd_v)';
        }
        if(window.innerWidth<=900 && window.innerWidth>700){
            navbar.style.paddingTop = 'var(--padd_v)';
            navbar.style.paddingBottom = 'var(--padd_v)';
        }
        if(window.innerWidth<=700 && window.innerWidth>450){
            navbar.style.paddingTop = 'var(--padd_v)';
            navbar.style.paddingBottom = 'var(--padd_v)';
        }
        if(window.innerWidth<=450){
            navbar.style.paddingTop = 'var(--padd_v)';
            navbar.style.paddingBottom = 'var(--padd_v)';
        }
    }
}


//----------------EVENTS
menu_btn.addEventListener('click', menuToggle);

team_btn.addEventListener('click', show_team);
team_btn.addEventListener('focus', show_team);
contact.addEventListener('focus', hide_team);
blogs.addEventListener('focus', hide_team);
account.addEventListener('focus', hide_team);
m_team.addEventListener('focus', show_team);
brd.addEventListener('focus', show_team);

account.addEventListener('click', show_acc);
account.addEventListener('focus', show_acc);
account_res.addEventListener('click', show_acc);
contact.addEventListener('focus', hide_acc);
(document.querySelector('#mng button')).addEventListener('focus', show_acc);
(document.querySelector('#auth_login a')).addEventListener('focus', show_acc);
(document.querySelector('#usr_login a')).addEventListener('focus', show_acc);
(document.querySelector('#mng button')).addEventListener('focus', menuClose);
(document.querySelector('#auth_login a')).addEventListener('focus', menuClose);
(document.querySelector('#usr_login a')).addEventListener('focus', menuClose);
icon_links.addEventListener('focus', hide_acc);
// home_bcr.addEventListener('focus', hide_acc);


window.addEventListener('resize',function(){
    if(window.innerWidth>630) {extra_pad = 15;}
    else {extra_pad = 10;}
    acc_par.style.paddingTop = `${navbar.offsetHeight+extra_pad}px`;
    team_menu.style.top = `${navbar.offsetHeight+extra_pad}px`;
});
window.addEventListener('load',function(){
    if(window.innerWidth>600) extra_pad = 15;
    else extra_pad = 10;
    acc_par.style.paddingTop = `${navbar.offsetHeight+extra_pad}px`;
    team_menu.style.top = `${navbar.offsetHeight+extra_pad}px`;
    //getfilename();
});
window.addEventListener('scroll', function(){
    if(window.innerWidth>600) extra_pad = 15;
    else extra_pad = 10;
    acc_par.style.paddingTop = `${navbar.offsetHeight+extra_pad}px`;
    team_menu.style.top = `${navbar.offsetHeight+extra_pad}px`;
});

window.addEventListener('scroll',nav_squish);
window.addEventListener('resize',nav_squish);

menu_links.forEach(e => {
    e.addEventListener('click',menuClose);
});
menu_links.forEach(e => {
    e.addEventListener('focus',menuOpen);
});

window.addEventListener('scroll', function(){
   if(window.scrollY>bdy.offsetHeight/4){
       btt.style.opacity = '1';
       btt.style.pointerEvents = 'auto';
       btt.style.transform = 'translateX(0)';
   }
   else{
        btt.style.opacity = '0';
        btt.style.pointerEvents = 'none';
        btt.style.transform = 'translateX(30px)';
    }
});
btt.addEventListener('click', function(){
    window.scrollTo({top:0,behavior: 'smooth'});
})

logo.addEventListener('click', function(){
    window.location.href = '../landing_page/index.html';
})

