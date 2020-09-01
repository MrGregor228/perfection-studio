import {
    pageSettingsFunction
} from "./page-settings.js";
import {
    chooseLang
} from "./lang-settings.js";

AOS.init({

    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

});

var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.projects-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
    },
});

let langEN = document.querySelector('.lang-en'),
    langRU = document.querySelector('.lang-ru'),
    htmlDoc = document.getElementsByTagName('html')[0],
    inputName = document.querySelector('.input-name'),
    inputPhone = document.querySelector('.input-phone');

langEN.addEventListener('click', () => {
    document.body.classList.add('opacity-color-change');
    localStorage.setItem('lang', 'en');
    setTimeout(() => {
        htmlDoc.setAttribute('lang', 'en');
        inputName.placeholder = "Your name";
        inputPhone.placeholder = "Your telephone";
        chooseLang();
    }, 200);
    setTimeout(() => {
        document.body.classList.remove('opacity-color-change');
    }, 300);
    
});
langRU.addEventListener('click', () => {
    document.body.classList.add('opacity-color-change');
    localStorage.setItem('lang', 'ru');
    setTimeout(() => {
        htmlDoc.setAttribute('lang', 'ru');
        inputName.placeholder = "Ваше имя";
        inputPhone.placeholder = "Ваш телефон";
        chooseLang();
    }, 200);
    setTimeout(() => {
        document.body.classList.remove('opacity-color-change');
    }, 300);
    
});

if (localStorage.getItem('lang') == "ru") {
    document.getElementsByTagName('html')[0].setAttribute('lang', 'ru');
    chooseLang();
    
} else if (localStorage.getItem('lang') == "en") {    
    document.getElementsByTagName('html')[0].setAttribute('lang', 'en');
    chooseLang();
    
}

document.querySelector('.hero-button').addEventListener('click', ()=>{
    let elem = document.querySelector('#form');
    elem.scrollIntoView();
});

pageSettingsFunction();
chooseLang();