import { URL, KEY, UI_ELEMENTS } from "./constants.js";
import { favoriteCity } from "./function.js";
import { forecast } from "./forecast.js";



export function createElementFavorite(){
    try{
        const ItemDiv = document.createElement('div');
        ItemDiv.classList = ` location`;
        const textItem = UI_ELEMENTS.DIV.NAME_CITY.innerHTML;
        const arrayNameLocation = document.querySelectorAll('.nameLocation');
        console.log(arrayNameLocation)
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
}


export function createLocation(ItemDiv, textItem){
    UI_ELEMENTS.DIV.LOCATION.append(ItemDiv);
    console.log(localStorage.getItem('favoriteCities'));
    const oldLine = localStorage.getItem('favoriteCities');
    let stringFavoriteCity=`${oldLine},${textItem}`;
    localStorage.setItem('favoriteCities',stringFavoriteCity)
    ItemDiv.innerHTML = `<div class="nameLocation">${textItem}</div>
    <img class="sign signDelete" src="img/close.svg" alt="buttonDeleteElement">`;
}


export function createElementFavoriteAutomatically(){
    try{
        const ItemDiv = document.createElement('div');
        ItemDiv.classList = ` location`;
        
        const textItem = UI_ELEMENTS.DIV.NAME_CITY.innerHTML;
        const arrayNameLocation = document.querySelectorAll('.nameLocation');
        console.log(arrayNameLocation);
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
}