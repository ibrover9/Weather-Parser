import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import { optionWeatherNow } from "./optionWeattherNow.js";
import { forecast } from "./forecast.js";


export function ButtonsFavorite(){
    for(let item of document.querySelectorAll('.nameLocation')){
        if(!item.addEventListener('click', ()=> {getWeatherNowButtonFavorite(item.innerHTML)})){
             item.addEventListener('click', ()=> {getWeatherNowButtonFavorite(item.innerHTML); });
        }
      }
 }


      function getWeatherNowButtonFavorite(nameCity){
         const cityName = nameCity;
         localStorage.setItem('NameCity', cityName);
            optionWeatherNow(cityName);
            forecast();
       
      }