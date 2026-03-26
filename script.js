function toggleMenu(){

let menu = document.getElementById("mobileMenu");

if(menu.style.display === "flex"){
menu.style.display = "none";
}
else{
menu.style.display = "flex";
}

}


const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("sliderDots");

let current = 0;

/* CREATE DOTS AUTOMATICALLY */

slides.forEach((_,index)=>{

const dot=document.createElement("span");

dot.classList.add("dot");

if(index===0) dot.classList.add("active");

dot.addEventListener("click",()=>showSlide(index));

dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function showSlide(index){

slides[current].classList.remove("active");
dots[current].classList.remove("active");

current=index;

slides[current].classList.add("active");
dots[current].classList.add("active");

}

/* AUTO SLIDE */

setInterval(()=>{

let next=current+1;

if(next>=slides.length) next=0;

showSlide(next);

},4000);
window.openLogin = function(){
document.getElementById("loginPopup").classList.add("active");
}

function closeLogin(){
document.getElementById("loginPopup").classList.remove("active");
}

/* Buttons that trigger popup */

document.querySelectorAll(
".login-btn, .explore-btn, .start-btn"
).forEach(btn=>{
btn.addEventListener("click",function(e){
e.preventDefault();
openLogin();
});
});
window.openLogin = function(){
document.getElementById("loginPopup").classList.add("active");
}

function closeLogin(){
document.getElementById("loginPopup").classList.remove("active");
}

function openSignup(){
closeLogin();
document.getElementById("signupPopup").classList.add("active");
}

function closeSignup(){
document.getElementById("signupPopup").classList.remove("active");
}

function switchToLogin(){
closeSignup();
openLogin();
}



/* USER DROPDOWN MENU */

document.addEventListener("DOMContentLoaded", function(){

const userIcon = document.getElementById("userIcon");
const dropdown = document.getElementById("userDropdown");

if(userIcon){

userIcon.addEventListener("click", function(e){

e.stopPropagation();

dropdown.style.display =
dropdown.style.display === "block" ? "none" : "block";

});

}

/* CLOSE DROPDOWN WHEN CLICKING OUTSIDE */

window.addEventListener("click", function(e){

if(dropdown && !dropdown.contains(e.target) && !userIcon.contains(e.target)){
dropdown.style.display = "none";
}

});

});
function toggleMenu(){
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}
function toggleDropdown(){
    const dropdown = document.getElementById("userDropdown");

    if(dropdown.style.display === "flex"){
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "flex";
    }
}

/* CLICK OUTSIDE CLOSE */
document.addEventListener("click", function(e){
    const menu = document.getElementById("userMenu");

    if(menu && !menu.contains(e.target)){
        const dropdown = document.getElementById("userDropdown");
        if(dropdown) dropdown.style.display = "none";
    }
});