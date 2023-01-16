const burgerButton = document.querySelector('.burger');
const dash = document.querySelector('.dash-container')
const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelectorAll('.burger-link');
const popUpCover = document.querySelector('.pop-up-cover');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.add('burger-menu-active');
    popUpCover.classList.add('pop-up-cover-active');
})
dash.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu-active');
    popUpCover.classList.remove('pop-up-cover-active');
})
burgerLinks.forEach((item) => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('burger-menu-active');
        popUpCover.classList.remove('pop-up-cover-active');
    })
})
popUpCover.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu-active');
    popUpCover.classList.remove('pop-up-cover-active');
})

