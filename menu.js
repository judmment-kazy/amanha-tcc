let menuBtn = document.querySelector('.menu');
let mobileNav = document.querySelector('.mobile-nav');
let mobileMenu = document.querySelectorAll('.mobile-nav__menu li');
let menuAberto = false;

menuBtn.addEventListener('click', () => {
    if(menuAberto){
        mobileNav.style.display = 'none';
    } else{
        mobileNav.style.display = 'flex';
    }
    menuAberto = !menuAberto;
});

