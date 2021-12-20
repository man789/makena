// Burger Menu Responsive With Toggle

let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main-nav');
burger.addEventListener("click", function(){
    burger.classList.toggle('active');
    nav.classList.toggle('main-nav-visible')
})

// Scroll Button into specific section

let btn = document.querySelector('.arrow-nav-style');
btn.addEventListener("click", function(){
    let arrow = document.querySelector('.main');
    arrow.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})