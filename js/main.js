import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import {  gerWeather_Now } from "./function.js";

UI_ELEMENTS.BUTTON.FIND_CITY.addEventListener('submit', gerWeather_Now)
