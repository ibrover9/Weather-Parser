 export function patternItemForecast(ItemDiv, dateDate, dateMonth, dateHours, dateMinutes, temperatyre, weather, feelsLike, iconWeather){
    
    ItemDiv.innerHTML = `<div class="weather-characteristic-rain-snow">
                     
                <div class="day-time display-flex">
                    <div class="day">
                        ${dateDate} ${dateMonth}
                    </div>
                    <div class="time">
                        ${dateHours}:${dateMinutes}
                    </div>
                </div>
                <div class="weather-characteristic-TemperatureAndRainSnow display-flex">
                    <div class="weather-characteristic-Temperature ">
                        Temperature:${temperatyre}
                    </div>
                    <div class="weather-characteristic-RainSnow">
                       ${weather}
                    </div>
                </div>
                <div class="weather-characteristic-FeelsLikeAndIcon display-flex">
                    <div class="weather-characteristic-FeelsLike">
                        Feels like: ${feelsLike}
                    </div>
                    <div class="weather-characteristic-Icon">
                        <img src="https://openweathermap.org/img/wn/${iconWeather}@2x.png" alt="">
                    </div>`
 }