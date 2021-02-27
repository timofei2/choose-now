window.addEventListener('DOMContentLoaded', function() {
    btnMenu = document.querySelector('.btn-menu'),
    menu = document.querySelector('.container-nav-links'),
    closeLineMenu = document.querySelectorAll('.btn-menu div');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('nav-links-open');
        closeLineMenu[0].classList.toggle('close-line-menu-top');
        closeLineMenu[0].classList.toggle('line-close-menu');
        closeLineMenu[1].classList.toggle('close-line-menu-bottom');
        closeLineMenu[1].classList.toggle('line-close-menu');
        closeLineMenu[2].classList.toggle('close-line-menu-hide');
    });


    slider = document.querySelector('.slider');
    contactsBlock = document.querySelector('.right-sidebur'),
    sliderSircle = document.querySelector('.slider__circle');

    slider.addEventListener('click', () => {
        contactsBlock.classList.toggle('show-right-sidebur');
        sliderSircle.classList.toggle('slider-on');
    });
});