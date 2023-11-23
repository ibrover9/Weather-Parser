import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import {  getWeather_Now_import, favoriteCity, favoriteCityAutomat1} from "./function.js";
import { forecast } from "./forecast.js";
import { optionWeatherNow } from "./optionWeattherNow.js";





    UI_ELEMENTS.BUTTON.FIND_CITY.addEventListener('submit', getWeather_Now_import,forecast)
    UI_ELEMENTS.BUTTON.FIND_CITY.addEventListener('submit', forecast)


if( UI_ELEMENTS.BUTTON.SHAPE){
    UI_ELEMENTS.BUTTON.SHAPE.addEventListener('click', favoriteCity);
}

document.querySelector('.menu-weather-parser').addEventListener('click', function(event){
    // console.log(event.target.closest('.menu-weather-parser'))
   const arrayWindow=document.querySelectorAll('.main_window_information');
   arrayWindow.forEach(element => {
    if(!element.classList.contains('hide'))
     console.log(element)
     element.classList.add('hide');
   });
   console.log(event.target.textContent)
   const currentWindow = `.${event.target.textContent}`
  document.querySelector(`${currentWindow}`).classList.remove('hide')
})


if(localStorage.getItem('NameCity')){
    const cityName = localStorage.getItem('NameCity');
     optionWeatherNow(cityName);
}


if(localStorage.getItem('favoriteCities')){
    console.log(1);
    const stringCities=localStorage.getItem('favoriteCities');
    console.log(stringCities);
    const arrayFavoriteCity=stringCities.split(',');
    console.log(arrayFavoriteCity);
    arrayFavoriteCity.forEach(element => {
        console.log(element)
        favoriteCityAutomat1(element);

    });
   
}
