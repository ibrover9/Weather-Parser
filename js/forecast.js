import { URL, KEY, UI_ELEMENTS, MOUNTH } from "./constants.js";
import { createItemsForecast } from "./createItemsForecast.js";






export const forecast = function(event){
    if(event){
    event.preventDefault();
    }
    const serverUrlForecast = URL.SERVER_URL_FORECAST;
    let cityName = UI_ELEMENTS.INPUT.FIND_CITY.value;
    if(cityName==''){
        cityName=localStorage.getItem('NameCity');
    }
    else {
        cityName=localStorage.getItem('NameCity');
    }
    createItemsForecast(serverUrlForecast, cityName);
    if(document.querySelector('.weather-characteristic-rain-snow')){
        const arrayForecast=document.querySelectorAll('.weather-characteristic-rain-snow');
        arrayForecast.forEach(element => {
            element.remove();
        });
    }

    UI_ELEMENTS.INPUT.FIND_CITY.value = '';
 }