const hamburger = document.querySelector('.nav-menu'),
menu = document.querySelector('.menu'),
body = document.querySelector('body'),
menuLines = document.querySelectorAll('.nav-menu__line'),
createAccount = document.querySelector('.login__create a'),
signUp = document.querySelector('.sign-up'),
closeButtonSignUp = document.querySelector(".sign-up__close"),
support = document.querySelector(".support"),
supportLink = document.querySelector(".support__link"),
supportClose = document.querySelector(".support__close");


const loginButton = document.querySelector("nav .button_login"),
    login = document.querySelector('.login'),
    closeButtonLogin = document.querySelector('.login__close');

hamburger.addEventListener('click', ()=>{
    body.classList.toggle("overflow-down");
    menu.classList.toggle("active");
    menuLines.forEach(function(item) {
        item.classList.toggle("nav__active");
    });
});

loginButton.addEventListener('click', ()=>{
    body.classList.add('overflow-down');
    login.classList.add('active');
});

closeButtonLogin.addEventListener('click', ()=>{
    body.classList.remove('overflow-down');
    login.classList.remove('active');
});

createAccount.addEventListener('click', (e) => {
    e.preventDefault();
    signUp.classList.add('active');
    login.classList.remove('active');
});

closeButtonSignUp.addEventListener('click', ()=>{
    signUp.classList.remove('active');
    login.classList.add('active');
});

supportLink.addEventListener("click", ()=>{
    body.classList.add('overflow-down');
    support.classList.add("active");
});

supportClose.addEventListener("click",()=> {
    body.classList.remove('overflow-down');
    support.classList.remove("active");
});
