import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import { optionWeatherNow } from "./optionWeattherNow.js";
import { ButtonDeleteTask } from "./ButtonsDeleteTask.js";
import { createElementFavorite } from "./createElementFavorite.js";
import { ButtonsFavorite } from "./buttonsFavorite.js";
// import { errorGetCity } from "./errorGetCity.js";

export const getWeather_Now_import = function(event) {
            event.preventDefault();
            const cityName = UI_ELEMENTS.INPUT.FIND_CITY.value;
            optionWeatherNow(cityName);
            UI_ELEMENTS.INPUT.FIND_CITY.value='';
     }


 export const favoriteCity= function(event){
    event.preventDefault();
    createElementFavorite();
    ButtonDeleteTask();
    ButtonsFavorite();
 }

