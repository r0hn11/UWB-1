let img = document.querySelector('main .wrapper .icon img');
let dot = document.querySelector('main .wrapper .icon .indicator');
let inputs = document.querySelectorAll('main .wrapper .otp_boxes input');
let btn = document.querySelector('main .wrapper button');
let form = document.querySelector('main form');


//---animating icon
function animate_img(){
    img.style.transform = 'scale(1.4)';
    setTimeout(() => {
        img.style.transform = 'scale(1)';
    }, 200);
    setTimeout(() => {
        dot.style.opacity = '1';
        dot.style.animation= "pop 1.5s ease-in-out infinite alternate";
    }, 150);
}


//---switching inputs
function type(){
    for(let i=0;i<inputs.length;i++){
        if(i+1<inputs.length){
            inputs[i].addEventListener('keyup', function(){
                if((inputs[i].value).length===1){
                    inputs[i+1].focus();
                }
            });
        }
    }
    
}


//---animating button
btn.style.filter = 'saturate(0)';
btn.style.pointerEvents = 'none';
let flag;

function check(){
    for(let i=0; i<inputs.length;i++){
        if(inputs[i].value.length === 1){flag = true;}
        else flag = false;
    }
    return flag;
}

//---activating button on input complete
function activate_btn(){    
    if(check()){
        btn.style.filter = 'saturate(1)';
        btn.style.pointerEvents = 'auto';
    }
    else{
        btn.style.filter = 'saturate(0)';
        btn.style.pointerEvents = 'none';
    }
}

//---final otp function
let otp = "";
function setotp(){
    otp = inputs[0].value + inputs[1].value + inputs[2].value + inputs[3].value + inputs[4].value;
    console.log(otp);
    return otp;
}

//---events and checks
btn.addEventListener('click', setotp);
window.onload = function(){
    setTimeout(() => { 
        animate_img();
    }, 1000);
    inputs[0].focus();
    type();
}

setInterval(() => {
    activate_btn();
}, 100);