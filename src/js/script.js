const hamburger = document.querySelector('.nav-menu'),
menu = document.querySelector('.menu'),
body = document.querySelector('body'),
menuLines = document.querySelectorAll('.nav-menu__line');

const loginButton = document.querySelector("nav .button_login"),
    login = document.querySelector('.login'),
    closeButton = document.querySelector('.login__close');

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

closeButton.addEventListener('click', ()=>{
    body.classList.remove('overflow-down');
    login.classList.remove('active');
});

new WOW().init();