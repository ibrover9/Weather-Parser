import { URL, KEY, UI_ELEMENTS } from "./constants.js";

export const gerWeather_Now = function(event) {
            event.preventDefault();
            const cityName = UI_ELEMENTS.INPUT.FIND_CITY.value
            const serverUrl = URL.SERVER_URL;
            const apiKey = KEY.API_KEY;
            const url =`${serverUrl}?q=${cityName}&appid=${apiKey}`;
    
            fetch(url)
            .then(resolve => resolve.json()
            ).then(data => {
                const temperature = Math.round(data["main"]["temp"]-273.15)+'&deg';
                const iconWeather = data["weather"][0]["icon"]
                UI_ELEMENTS.DIV.TEMPERATURE.innerHTML = temperature;
                UI_ELEMENTS.DIV.NAME_CITY.innerHTML = cityName;
                UI_ELEMENTS.DIV.ICON_WEATHER.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`;
            })
     }
