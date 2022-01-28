//----------------ELEMENTS
let body = document.getElementsByTagName('body')[0];
let gh_btn = document.querySelector('.get_help_btn');
let skip_nav = document.querySelector('.skip_nav');
let donate = document.querySelector('.donate_us_btn');


//----------------FUNCTIONS
gh_btn.addEventListener('mouseover', function(){
    shine.style.animation = 'shine 1.2s ease-in-out 1 forwards';
    setTimeout(() => {
        shine.style.animation = 'none';
    }, 2000);
})
gh_btn.addEventListener('focus', function(){
    shine.style.animation = 'shine 1.2s ease-in-out 1 forwards';
    setTimeout(() => {
        shine.style.animation = 'none';
    }, 2000);
})

window.onload = function(){
    console.log('done');
    setTimeout(() => {
        shine.style.animation = 'shine 1.2s ease-in-out 1 forwards';
        setTimeout(() => {
            shine.style.animation = 'none';
        }, 2000);
    }, 4000);
}

function show_about(){
    if(window.scrollY>(document.querySelector('.hero_top').offsetHeight - document.querySelector('.hero_top').offsetHeight/1.5)){
        document.querySelector('.abt1').style.transitionDuration = '0.6s';
        document.querySelectorAll('.abt_link').forEach(element => {
            element.style.transitionDuration = '0.7s';
        });
        document.querySelector('.abt1').classList.remove('hidden_up');
        for(let i =0; i<document.querySelectorAll('.abt_link').length;i++){
            let delay = 0.2;
            document.querySelectorAll('.abt_link')[i].style.transitionDelay = `${delay+i/5}s`;
            document.querySelectorAll('.abt_link')[i].classList.remove('hidden_up');
            setTimeout(() => {
                document.querySelectorAll('.abt_link')[i].style.transitionDelay = `0s`;
            }, 500);
        }
    }
    else{
        document.querySelector('.abt1').classList.add('hidden_up');
        document.querySelectorAll('.abt_link').forEach(element => {
            element.classList.add('hidden_up');
        });
    }
}

function show_extras(){
    if((window.scrollY>(document.querySelector('.hero_top').offsetHeight + document.querySelector('.abt_main').offsetHeight)-(document.querySelector('.hero_top').offsetHeight + document.querySelector('.abt_main').offsetHeight)/3)){
        document.querySelectorAll('.extra_link').forEach(element => {
            element.style.transitionDuration = '0.5s';
        });
        for(let i =0; i<document.querySelectorAll('.extra_link').length;i++){
            let delay = 0;
            document.querySelectorAll('.extra_link')[i].style.transitionDelay = `${delay+i/5}s`;
            document.querySelectorAll('.extra_link')[i].classList.remove('hidden_static');
            setTimeout(() => {
                document.querySelectorAll('.extra_link')[i].style.transitionDelay = `0s`;
            }, 500);
        }
    }
    else{
        document.querySelectorAll('.extra_link').forEach(element => {
            element.classList.add('hidden_static');
        });
    }
}

function show_counts(){
    if((window.scrollY>(document.querySelector('.hero_top').offsetHeight + document.querySelector('.abt_main').offsetHeight + document.querySelector('.extras_main').offsetHeight-(document.querySelector('.hero_top').offsetHeight + document.querySelector('.abt_main').offsetHeight + document.querySelector('.extras_main').offsetHeight)/3))){
        document.querySelectorAll('.org_links').forEach(element => {
            element.style.transitionDuration = '0.5s';
        });
        for(let i =0; i<document.querySelectorAll('.org_links').length;i++){
            let delay = 0;
            document.querySelectorAll('.org_links')[i].style.transitionDelay = `${delay+i/5}s`;
            document.querySelectorAll('.org_links')[i].classList.remove('scaled_down');
            setTimeout(() => {
                document.querySelectorAll('.org_links')[i].style.transitionDelay = `0s`;
            }, 500);
        }
    }
    else{
        document.querySelectorAll('.org_links').forEach(element => {
            element.classList.add('scaled_down');
        });
    }
}

//----------------EVENTS
window.addEventListener('scroll',show_about);
window.addEventListener('scroll',show_extras);
window.addEventListener('scroll',show_counts);

window.addEventListener('load', function(){
    if(window.innerHeight>(document.querySelector('.hero_top').offsetHeight*1.6)){
        window.removeEventListener('scroll', show_about);
        window.removeEventListener('scroll', show_extras);
        window.removeEventListener('scroll', show_counts);
        setTimeout(() => {            
            document.querySelector('.abt1').style.transitionDuration = '0.6s';
            document.querySelectorAll('.abt_link').forEach(element => {
                element.style.transitionDuration = '0.7s';
            });
            document.querySelector('.abt1').classList.remove('hidden_up');
            for(let i =0; i<document.querySelectorAll('.abt_link').length;i++){
                let delay = 0.2;
                document.querySelectorAll('.abt_link')[i].style.transitionDelay = `${delay+i/5}s`;
                document.querySelectorAll('.abt_link')[i].classList.remove('hidden_up');
                setTimeout(() => {
                    document.querySelectorAll('.abt_link')[i].style.transitionDelay = `0s`;
                }, 500);
            }
            document.querySelectorAll('.extra_link').forEach(element => {
                element.style.transitionDuration = '0.5s';
            });
            for(let i =0; i<document.querySelectorAll('.extra_link').length;i++){
                let delay = 0;
                document.querySelectorAll('.extra_link')[i].style.transitionDelay = `${delay+i/5}s`;
                document.querySelectorAll('.extra_link')[i].classList.remove('hidden_static');
                setTimeout(() => {
                    document.querySelectorAll('.extra_link')[i].style.transitionDelay = `0s`;
                }, 500);
            }
            document.querySelectorAll('.org_links').forEach(element => {
                element.style.transitionDuration = '0.5s';
            });
            for(let i =0; i<document.querySelectorAll('.org_links').length;i++){
                let delay = 0;
                document.querySelectorAll('.org_links')[i].style.transitionDelay = `${delay+i/5}s`;
                document.querySelectorAll('.org_links')[i].classList.remove('scaled_down');
                setTimeout(() => {
                    document.querySelectorAll('.org_links')[i].style.transitionDelay = `0s`;
                }, 500);
            }
        }, 3000);
    }
})

gh_btn.addEventListener('focus', hide_acc);
skip_nav.addEventListener('focus', menuClose);
donate.addEventListener('focus', function(){
    window.removeEventListener('scroll', show_extras);
    document.querySelectorAll('.extra_link').forEach(element => {
        element.style.transitionDuration = '0.5s';
    });
    for(let i =0; i<document.querySelectorAll('.extra_link').length;i++){
        let delay = 0;
        document.querySelectorAll('.extra_link')[i].style.transitionDelay = `${delay+i/5}s`;
        document.querySelectorAll('.extra_link')[i].classList.remove('hidden_static');
        setTimeout(() => {
            document.querySelectorAll('.extra_link')[i].style.transitionDelay = `0s`;
        }, 500);
    }
    setTimeout(() => {
        window.addEventListener('scroll', show_extras);
    }, 2000);
})





//----------------EASTEREGG
let date = new Date;
document.querySelector('.yr').innerHTML = date.getFullYear();
function new_yr_greet(){
    if(date.getDate() === 1){
        if(date.getMonth() === 0){
        document.querySelector('.easteregg1').style.display = 'flex';
        setTimeout(() => {
                window.scrollTo({top:0,behavior: 'smooth'});
                body.style.overflowY = 'hidden';
                document.querySelector('.easteregg1').style.opacity = '1';
                document.querySelector('.easteregg1').style.pointerEvents = 'auto';
            }, 1000);
        }
    }
}
new_yr_greet();
document.onclick = function(e){
    document.querySelector('.easteregg1').style.opacity = '0';
    document.querySelector('.easteregg1').style.pointerEvents = 'none';
    body.style.overflowY = 'scroll';
    setTimeout(() => {
        document.querySelector('.easteregg1').style.display = 'none';
    }, 1000);

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