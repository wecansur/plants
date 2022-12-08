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
    if (!((lawnButton.className === 'services-bttn lawn-button button-active') && (plantingButton.className === 'services-bttn planting-button button-active'))) {
        gardenButton.classList.toggle('button-active');
        if (!((lawnButton.className === 'services-bttn lawn-button button-active') || (plantingButton.className === 'services-bttn planting-button button-active'))) {
                plantingServices.forEach((item) => {
                    item.classList.toggle('blur');
                });
                lawnService.classList.toggle('blur');
        } else {
            gardenServices.forEach((item) => {
                item.classList.toggle('blur');
            });
        }
    }
})

lawnButton.addEventListener('click', () => {
    if (!((gardenButton.className === 'services-bttn garden-button button-active') && (plantingButton.className === 'services-bttn planting-button button-active'))) {
        lawnButton.classList.toggle('button-active');
        if (!((gardenButton.className === 'services-bttn garden-button button-active') || (plantingButton.className === 'services-bttn planting-button button-active'))) {
            gardenServices.forEach((item) => {
                item.classList.toggle('blur');
            });
            plantingServices.forEach((item) => {
                item.classList.toggle('blur');
            });
        } else {
            lawnService.classList.toggle('blur');
        }
    }
})

plantingButton.addEventListener('click', () => {
    if (!((gardenButton.className === 'services-bttn garden-button button-active') && (lawnButton.className === 'services-bttn lawn-button button-active'))) {
        plantingButton.classList.toggle('button-active');
        if (!((gardenButton.className === 'services-bttn garden-button button-active') || (lawnButton.className === 'services-bttn lawn-button button-active'))) {
            gardenServices.forEach((item) => {
                item.classList.toggle('blur');
            });
            lawnService.classList.toggle('blur');
        } else {
            plantingServices.forEach((item) => {
                item.classList.toggle('blur');
            }); 
        }
    }
})

//price drop-down

const basicsButton = document.querySelector('.basics-button');

const standardBlock = document.querySelector('.standard-block');
const proCareBlock = document.querySelector('.pro-care-block');

const basicsDD = document.querySelector('.basics-dd');

const basicsHeader = document.querySelector('.basics-header');

const activateDropDown = (dropDown, otherBlock1, otherBlock2, header) => {
    dropDown.classList.toggle('drop-down-active');
    otherBlock1.classList.toggle('inactive');
    otherBlock2.classList.toggle('inactive');
    header.classList.toggle('tariff-header-active')
}

basicsButton.addEventListener('click', () => {
    activateDropDown(basicsDD, standardBlock, proCareBlock, basicsHeader);
})