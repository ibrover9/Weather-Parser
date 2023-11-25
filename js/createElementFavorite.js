import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import { favoriteCity } from "./function.js";
import { forecast } from "./forecast.js";


export function InitializationElementFavorite(nameCity){
    this.nameCity = nameCity;
    this.ItemDiv = document.createElement('div');
    this.arrayNameLocation = document.querySelectorAll('.nameLocation');
    this.keyStop = false;
}

export function createElementFavorite(){
    try{
        const textNameCity = UI_ELEMENTS.DIV.NAME_CITY.innerHTML;
        const favoriteCity = new InitializationElementFavorite(textNameCity);
        favoriteCity.ItemDiv.classList = ` location`;
        favoriteCity.arrayNameLocation.forEach(element => {
            if(element.innerHTML == favoriteCity.nameCity){
                favoriteCity.keyStop=true;
            }
            
        });

        if(!favoriteCity.keyStop){
            createLocation( favoriteCity.ItemDiv, favoriteCity.nameCity);
        }
        else{
            alert("Данный город уже присутствует в списке ЛЮБИМЫХ ЛОКАЦИЙ");
        }
        favoriteCity.keyStop = false;
    }
    catch(error){
        const SyntaxError = error.name == "SyntaxError";
        if(SyntaxError){
            alert( " Error message: " + "\n" + error.message + "\nError stack: \n" + error.stack);
        }else{
            throw error;
        }
       
    }
}


export function createLocation(ItemDiv, textItem){
    UI_ELEMENTS.DIV.LOCATION.append(ItemDiv);
    const oldLine = localStorage.getItem('favoriteCities');
    let stringFavoriteCity=`${oldLine},${textItem}`;
    localStorage.setItem('favoriteCities',stringFavoriteCity)
    ItemDiv.innerHTML = `<div class="nameLocation">${textItem}</div>
    <img class="sign signDelete" src="img/close.svg" alt="buttonDeleteElement">`;
}


export function createElementFavoriteAutomatically(){
    try{
        const textNameCity = UI_ELEMENTS.DIV.NAME_CITY.innerHTML;
        const favoriteCity = new InitializationElementFavorite(textNameCity);
        favoriteCity.ItemDiv.classList = ` location`;
        favoriteCity.arrayNameLocation.forEach(element => {
            if(element.innerHTML == favoriteCity.nameCity){
                favoriteCity.keyStop=true;
            }
            
        });

        if(!favoriteCity.keyStop){
            createLocation(favoriteCity.ItemDiv, favoriteCity.nameCity);
        }
        else{
            alert("Данный город уже присутствует в списке ЛЮБИМЫХ ЛОКАЦИЙ");
        }
        favoriteCity.keyStop = false;
    }
    catch(error){
        const SyntaxError = error.name == "SyntaxError";
        if(SyntaxError){
            alert( " Error message: " + "\n" + error.message + "\nError stack: \n" + error.stack);
        }else{
            throw error;
        }
       
    }
}