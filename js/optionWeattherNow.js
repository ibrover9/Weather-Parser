import { URL, KEY, UI_ELEMENTS } from "./constants.js";


export function optionWeatherNow(cityName){
    const serverUrl = URL.SERVER_URL;
        const apiKey = KEY.API_KEY;
        const url =`${serverUrl}?q=${cityName}&appid=${apiKey}`;

        fetch(url)
        .then(resolve => resolve.json()
        ).then(data => {
            const temperature = Math.round(data["main"]["temp"]-273.15)+' &deg';
            const feelsLike = Math.round(data["main"]["feels_like"]-273.15)+' &deg';
            const weather = data["weather"][0]["main"];
            const iconWeather = data["weather"][0]["icon"];
            const sunrise = new Date(data["sys"]["sunrise"]*1000);
            const sunset = new Date (data["sys"]["sunset"]*1000);
            let sunriseHours = sunrise.getHours();
            let sunriseMinutes = sunrise.getMinutes();
            let sunsetHours = sunset.getHours();
            let sunsetMinutes = sunset.getMinutes();
            if(sunriseHours<10) sunriseHours ='0' + sunriseHours;
            if(sunriseMinutes<10) sunriseMinutes ='0' + sunriseMinutes;
            if(sunsetHours<10) sunsetHours ='0' + sunsetHours;
            if(sunsetMinutes<10) sunsetMinutes ='0' + sunsetMinutes;
            if(UI_ELEMENTS.DIV.TEMPERATURE){
            UI_ELEMENTS.DIV.TEMPERATURE.innerHTML = temperature;
            UI_ELEMENTS.DIV.DETAILS_TEMPERATURE.innerHTML = `Temperature: ${temperature}`;
            }
            const arrayNameCity = document.querySelectorAll('.name-city')
            arrayNameCity.forEach(element => {
                element.textContent = cityName;
            });
           
            if(UI_ELEMENTS.DIV.ICON_WEATHER){
                UI_ELEMENTS.DIV.ICON_WEATHER.src = `https://openweathermap.org/img/wn/${iconWeather}@2x.png`;
            }

            if(UI_ELEMENTS.DIV.FEELSLIKE){
                UI_ELEMENTS.DIV.FEELSLIKE.innerHTML = `FeelsLike: ${feelsLike}`;
            }

            if(UI_ELEMENTS.DIV.WEATHER){
                UI_ELEMENTS.DIV.WEATHER.textContent = `Weather: ${weather}`;

            }

            if(UI_ELEMENTS.DIV.SUNRISE){
                UI_ELEMENTS.DIV.SUNRISE.textContent =`Sunrise: ${sunriseHours}:${sunriseMinutes}`;

            }

            if(UI_ELEMENTS.DIV.SUNSET){
                UI_ELEMENTS.DIV.SUNSET.textContent = `Sunset: ${sunsetHours}:${sunsetMinutes}`;

            } 
        }).catch(error => {
            errorGetCity(error);
        }).catch(error=>alert('Ошибка ссылки URL' + error))
  }



  function errorGetCity(error){
    if(error.message.includes("Cannot read properties of undefined (reading 'temp')")){
        alert('Нет такого города' + error)
    }
    else{
        throw error
    }
 }