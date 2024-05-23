let text = document.getElementById('text');
let button = document.querySelector('.circle');
let buttonback = document.querySelector('.button');
let img = document.querySelector('.image')
let title = document.querySelector('.title')
var cont = 0;
var num =0;
let checker = "true";

function changeBackground1(){
    checker = "false"
    if (num <= 110 ) {
        document.body.style.background = `linear-gradient(90deg, #323032 ${num}%, #FFFFFF 0%`;
        num+=1.5;
        setTimeout(changeBackground1, 1);
    } else checker = "true"
}

function changeBackground2(){
    checker = "false"
    if (num >= -10) {
        document.body.style.background = `linear-gradient(90deg, #323032 ${num}%, #FFFFFF 0%`;
        num-=1.5;
        setTimeout(changeBackground2, 1);
    } else checker = "true"
}


function active(){
    if(checker == "true"){
    if(cont%2==0){
        img.src = "icons/moon.png";
        button.style.animation = "dark-active 0.25s ease-in-out";
        img.style.animation = "imgAnimation 0.6s ease-in-out";
        button.style.left = "47%";
        buttonback.style.background = "#56A9FF";
        buttonback.style.boxShadow = "1px 2px 10px #56a8ff67";
        cont++;
        changeBackground1();
        text.innerText="Modo Escuro";
        title.innerText="Dark 🌙"
        text.style.color = "#FFFFFF";
        text.style.animation = "opa 0.5s ease-in-out";
    } else{
        img.src = "icons/sun.png";
        button.style.animation = "light-active 0.25s ease-in-out";
        img.style.animation = "imgAnimation 0.6s ease-in-out";
        button.style.left = "5%";
        buttonback.style.background = "#EBE9EB";
        buttonback.style.boxShadow = "2px 3px 5px rgba(0, 0, 0, 0.116)";
        document.body.style.background = "#323032";
        cont--;
        changeBackground2();
        text.innerText = "Modo Claro";
        title.innerText="Light 🔅"
        text.style.color = "#CBCBCB";
        text.style.animation = "opa 0.5s ease-in-out";
    }
    setTimeout(()=>{
        text.style.animation = "none";
        img.style.animation = "none";
    },600);}
}