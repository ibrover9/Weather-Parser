import { URL, KEY, UI_ELEMENTS, MOUNTH } from "./constants.js";
import { optionWeatherNow } from "./optionWeattherNow.js";
import { ButtonDeleteTask } from "./ButtonsDeleteTask.js";
import { createElementFavorite, createElementFavoriteAutomatically } from "./createElementFavorite.js";
import { ButtonsFavorite } from "./buttonsFavorite.js";
import { forecast } from "./forecast.js";
// import { errorGetCity } from "./errorGetCity.js";

export const getWeather_Now_import = function(event) {
            event.preventDefault();
            localStorage.setItem('NameCity', UI_ELEMENTS.INPUT.FIND_CITY.value);
            const cityName = localStorage.getItem('NameCity');
            optionWeatherNow(cityName);
     }


 export const favoriteCity = function(event){
   if(event){
    event.preventDefault();
   }
    createElementFavorite();
    ButtonDeleteTask();
    ButtonsFavorite();
    
 }


 export function favoriteCityAutomat1(NameCity){
   try{
      const ItemDiv = document.createElement('div');
      ItemDiv.classList = `location`;
      const textItem = NameCity;
      const arrayNameLocation = document.querySelectorAll('.nameLocation');
      let keyStop = false;
      arrayNameLocation.forEach(element => {
          if(element.innerHTML == textItem){
              console.log(element);
              console.log(textItem);
              keyStop=true;
          }
      });

      if(!keyStop){
          createLocation(ItemDiv, textItem);
      }
      else{
          alert("Данный город уже присутствует в списке ЛЮБИМЫХ ЛОКАЦИЙ");
      }
      keyStop = false;
  }
  catch(error){
      const SyntaxError = error.name == "SyntaxError";
      if(SyntaxError){
          alert( " Error message: " + "\n" + error.message + "\nError stack: \n" + error.stack);
      }else{
          throw error;
      }
     
  }


    ButtonDeleteTask();
    ButtonsFavorite();
 }



 export function createLocation(ItemDiv, textItem){
   UI_ELEMENTS.DIV.LOCATION.append(ItemDiv);
   ItemDiv.innerHTML = `<div class="nameLocation">${textItem}</div>
   <img class="sign signDelete" src="img/close.svg" alt="buttonDeleteElement">`;
}