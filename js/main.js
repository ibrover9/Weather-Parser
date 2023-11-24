import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import {  getWeather_Now_import, favoriteCity, favoriteCityAutomat} from "./function.js";
import { forecast } from "./forecast.js";
import { optionWeatherNow } from "./optionWeattherNow.js";
import { menuHiden } from "./menuHide.js";





UI_ELEMENTS.BUTTON.FIND_CITY.addEventListener('submit', getWeather_Now_import,forecast)

UI_ELEMENTS.BUTTON.FIND_CITY.addEventListener('submit', forecast)


if( UI_ELEMENTS.BUTTON.SHAPE){
    UI_ELEMENTS.BUTTON.SHAPE.addEventListener('click', favoriteCity);
}

UI_ELEMENTS.BUTTON.MENU_WEATHER.addEventListener('click', menuHiden)


if(localStorage.getItem('NameCity')){
    const cityName = localStorage.getItem('NameCity');
     optionWeatherNow(cityName);
     forecast();
}


if(localStorage.getItem('favoriteCities')){
    const stringCities=localStorage.getItem('favoriteCities');
    const arrayFavoriteCity=stringCities.split(',');
    arrayFavoriteCity.forEach(element => {
        favoriteCityAutomat(element);
    });
}
