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
const standardButton = document.querySelector('.standard-button');
const proCareButton = document.querySelector('.pro-care-button');

const basicsCloseButton = document.querySelector('.basics-close-button');
const standardCloseButton = document.querySelector('.standard-close-button');
const proCareCloseButton = document.querySelector('.pro-care-close-button');

const basicsBlock = document.querySelector('.basics-block');
const standardBlock = document.querySelector('.standard-block');
const proCareBlock = document.querySelector('.pro-care-block');

const basicsDD = document.querySelector('.basics-dd');
const standardDD = document.querySelector('.standard-dd');
const proCareDD = document.querySelector('.pro-care-dd');

const basicsHeader = document.querySelector('.basics-header');
const standardHeader = document.querySelector('.standard-header');
const proCareHeader = document.querySelector('.pro-care-header');

const tariffesContainer = document.querySelector('.tariffes');

const activateDropDown = (dropDown, header, openBtn, closeBtn) => {
    if (basicsDD.className === 'drop-down basics-dd drop-down-active') {
        disactivateDropDown(basicsDD, basicsHeader, basicsButton, basicsCloseButton);
    }
    if (standardDD.className === 'drop-down standard-dd drop-down-active') {
        disactivateDropDown(standardDD, standardHeader, standardButton, standardCloseButton);
    }
    if (proCareDD.className === 'drop-down pro-care-dd drop-down-active') {
        disactivateDropDown(proCareDD, proCareHeader, proCareButton, proCareCloseButton);
    }
    dropDown.classList.add('drop-down-active');
    header.classList.add('tariff-header-active');
    openBtn.classList.add('inactive');
    closeBtn.classList.add('active');
    tariffesContainer.classList.add('tariffes-no-padding');
}
const disactivateDropDown = (dropDown, header, openBtn, closeBtn) => {
    dropDown.classList.remove('drop-down-active');
    header.classList.remove('tariff-header-active');
    openBtn.classList.remove('inactive');
    closeBtn.classList.remove('active');
    tariffesContainer.classList.remove('tariffes-no-padding');
}

basicsButton.addEventListener('click', () => {
    activateDropDown(basicsDD, basicsHeader, basicsButton, basicsCloseButton);
})
basicsCloseButton.addEventListener('click', () => {
    disactivateDropDown(basicsDD, basicsHeader, basicsButton, basicsCloseButton);
})

standardButton.addEventListener('click', () => {
    activateDropDown(standardDD, standardHeader, standardButton, standardCloseButton);
})
standardCloseButton.addEventListener('click', () => {
    disactivateDropDown(standardDD, standardHeader, standardButton, standardCloseButton);
})

proCareButton.addEventListener('click', () => {
    activateDropDown(proCareDD, proCareHeader, proCareButton, proCareCloseButton);
})
proCareCloseButton.addEventListener('click', () => {
    disactivateDropDown(proCareDD, proCareHeader, proCareButton, proCareCloseButton);
})