import { URL, KEY, UI_ELEMENTS, MOUNTH } from "./constants.js";
import { createItemsForecast } from "./createItemsForecast.js";






export const forecast = function(event){
    event.preventDefault();
    const serverUrlForecast = URL.SERVER_URL_FORECAST;
    const cityName = UI_ELEMENTS.INPUT.FIND_CITY.value;
    console.log(cityName);
    createItemsForecast(serverUrlForecast, cityName);
    if(document.querySelector('.weather-characteristic-rain-snow')){

        const arrayForecast=document.querySelectorAll('.weather-characteristic-rain-snow');
        arrayForecast.forEach(element => {
            element.remove();
        });
    }

    UI_ELEMENTS.INPUT.FIND_CITY.value = '';
 }