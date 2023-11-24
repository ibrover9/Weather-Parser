export const MOUNTH = ["", "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export const URL = {
     SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
     SERVER_URL_FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
    //  ICON:'http://api.openweathermap.org/img/wn/02d@2x.png'
    }

export const KEY = {
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
}

export const UI_ELEMENTS = {
    BUTTON: {
        FIND_CITY: document.querySelector('.box-icon-Search-cities'),
        SHAPE: document.querySelector('.add-city-shape'),
        MENU_WEATHER: document.querySelector('.menu-weather-parser'),
        
    },
    INPUT:{
        FIND_CITY:  document.querySelector('.input-Search-cities'),
    },
    DIV:{
        TEMPERATURE: document.querySelector('.temperature'),
        DETAILS_TEMPERATURE: document.querySelector('.weather-characteristic-Temperature'),
        FEELSLIKE: document.querySelector(' .weather-characteristic-Feels_like'),
        WEATHER: document.querySelector(' .weather-characteristic-Weather'),
        SUNRISE: document.querySelector(' .weather-characteristic-Sunrise'),
        SUNSET: document.querySelector(' .weather-characteristic-Sunset'),
        
        NAME_CITY:  document.querySelector('.name-city'),
        ICON_WEATHER: document.querySelector('.icon-weather'),
        ADD_CITY: 1,
        LOCATION: document.querySelector('.locations'),
        ITEM_FORECAST: document.querySelector(' .weather-characteristics-rain-snow' ),

        //спросить
        // ALL_LOCATIONS_FAVORITE: document.querySelectorAll('.nameLocation'),
       
    }
}



// export const ERROR = {
//     GET_NAME_CITY:  error.message.includes("Cannot read properties of undefined (reading 'temp')"),
// }
