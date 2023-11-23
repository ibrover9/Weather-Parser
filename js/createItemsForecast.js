import { URL, KEY, UI_ELEMENTS, MOUNTH } from "./constants.js";
import { patternItemForecast } from "./patternItemForecast.js";



export function createItemsForecast(serverUrlForecast, cityName){
    const url =`${serverUrlForecast}?q=${cityName}&appid=${KEY. API_KEY}`;
    fetch(url)
         .then(resolve => resolve.json()
         ).then(data => {
            const arrayItemsForecast = data["list"];
            arrayItemsForecast.forEach(element => {
                const temperatyre = Math.round( element['main']['temp'] - 273.15 )+' &deg'
                const feelsLike = element['main']['feels_like'];
                const date = new Date (element['dt'] * 1000);
                const dateDate = date.getDate();
                const weather = element["weather"][0]["main"];
                const iconWeather = element["weather"][0]["icon"];
                const dateMonth = MOUNTH [date.getMonth() + 1];
                let dateHours = date.getHours();
                let dateMinutes = date.getMinutes();
                if(dateHours < 10) dateHours ='0' + dateHours;
                if(dateMinutes < 10) dateMinutes ='0' + dateMinutes;
                const ItemDiv = document.createElement('div');
                ItemDiv.className='weather-characteristic-rain-snow';
                if(UI_ELEMENTS.DIV.ITEM_FORECAST){
                   UI_ELEMENTS.DIV.ITEM_FORECAST.append(ItemDiv);
                }

                patternItemForecast(ItemDiv, dateDate, dateMonth, dateHours, dateMinutes, temperatyre, weather, feelsLike, iconWeather);
                
            });
            
  })
}