import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const glassNumber = document.querySelector('.glass__number--js');
const buttonAdd = document.querySelector('.button-add--js');
const buttonRemove = document.querySelector('.button-remove--js');
const key = new Date().toLocaleString().slice(0, 10);

let currentGlassNumber = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassNumber = localStorageValue;
    glassNumber.innerHTML = currentGlassNumber;
}else {
    localStorage.setItem(key, 0);
}

buttonAdd.addEventListener('click', () => {
    currentGlassNumber++;
    glassNumber.innerHTML = currentGlassNumber;
    localStorage.setItem(key, currentGlassNumber);
});

buttonRemove.addEventListener('click', () => {
    if (currentGlassNumber > 0) {
        currentGlassNumber--;
    }
    glassNumber.innerHTML = currentGlassNumber;
    localStorage.setItem(key, currentGlassNumber);
});






