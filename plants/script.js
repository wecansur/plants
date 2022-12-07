//burger-menu

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

//services

const gardenButton = document.querySelector('.garden-button');
const lawnButton = document.querySelector('.lawn-button');
const plantingButton = document.querySelector('.planting-button');
const gardenServices = document.querySelectorAll('.garden-service');
const plantingServices = document.querySelectorAll('.planting-service');
const lawnService = document.querySelector('.lawn-service');

gardenButton.addEventListener('click', () => {
    if ((lawnButton.className !== 'services-bttn lawn-button button-active') || (plantingButton.className !== 'services-bttn planting-button button-active')) {
        gardenButton.classList.toggle('button-active');
        
        if (4 === 4) {
            plantingServices.forEach((item) => {
                item.classList.toggle('blur');
            });
        }
        if (4 === 4) {
            lawnService.classList.toggle('blur');
        }
        
        if (gardenServices[0].className === 'service garden-service blur') {
            gardenServices.forEach((item) => {
                item.classList.remove('blur');
            });
        }
    }
})

lawnButton.addEventListener('click', () => {
    if ((gardenButton.className !== 'services-bttn garden-button button-active') || (plantingButton.className !== 'services-bttn planting-button button-active')) {
        lawnButton.classList.toggle('button-active');

        if (4 === 4) {
            gardenServices.forEach((item) => {
                item.classList.toggle('blur');
            });
        }
        if (4 === 4) {
            plantingServices.forEach((item) => {
                item.classList.toggle('blur');
            });
        }
        
        if (lawnService.className === 'service lawn-service blur') {
            lawnService.classList.remove('blur');
        }
    }
})

plantingButton.addEventListener('click', () => {
    if ((gardenButton.className !== 'services-bttn garden-button button-active') || (lawnButton.className !== 'services-bttn lawn-button button-active')) {
        plantingButton.classList.toggle('button-active');

        if (4 === 4) {
            gardenServices.forEach((item) => {
                item.classList.toggle('blur');
            });
        }
        if (4 === 4) {
            lawnService.classList.toggle('blur');
        }

        if (plantingServices[0].className === 'service planting-service blur') {
            plantingServices.forEach((item) => {
                item.classList.remove('blur');
            });
        }
    }
})