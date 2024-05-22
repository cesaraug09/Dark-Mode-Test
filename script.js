let text = document.getElementById('text');
let button = document.querySelector('.circle');
let buttonback = document.querySelector('.button');
let img = document.querySelector('.image')
var cont = 0;

function active(){
    if(cont%2==0){
        button.style.animation = "dark-active 0.25s ease-in-out";
        img.style.animation = "imgAnimation 0.6s ease-in-out";
        img.src = "icons/moon.jpg";
        button.style.left = "47%";
        text.innerText = "Modo Escuro";
        text.style.color = "#D7D5D7";
        buttonback.style.background = "#56A9FF";
        buttonback.style.boxShadow = "1px 2px 10px #56a8ff67";
        document.body.style.background = "#262431";
        cont++;
    } else{
        button.style.animation = "light-active 0.25s ease-in-out";
        img.style.animation = "imgAnimation 0.6s ease-in-out";
        img.src = "icons/sun.jpg";
        button.style.left = "5%";
        text.innerText = "Modo Claro";
        text.style.color = "#333133";
        buttonback.style.background = "#EBE9EB";
        buttonback.style.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.116)";
        document.body.style.background = "#FEFCFE";
        cont--;
    }
    setTimeout(()=>{
        img.style.animation = "none";},600);
}