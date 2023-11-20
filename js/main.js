import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import {  getWeather_Now_import, favoriteCity } from "./function.js";

UI_ELEMENTS.BUTTON.FIND_CITY.addEventListener('submit', getWeather_Now_import)
document.querySelector('.add-city-shape').addEventListener('submit', favoriteCity)
