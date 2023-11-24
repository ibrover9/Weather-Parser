export function  ButtonDeleteTask(){
    try{
      for(let item of document.querySelectorAll('.signDelete')){
          if(!item.addEventListener('click', DeleteElementList)){
          item.addEventListener('click', DeleteElementList);
          }
        }
      }catch{
        throw error;
      }
}

const DeleteElementList=function(event){
    try{
      event.target.closest('.location').remove();
      let stringFavoriteCity=localStorage.getItem('favoriteCities');
      let arrayFavoriteCity=stringFavoriteCity.split(',');
      let newStringFavoriteCity='';
      arrayFavoriteCity.forEach(element => {
        const deleteCity = event.target.closest('.location').querySelector('.nameLocation');
        if(element==deleteCity.textContent){

        }
        else{
          if(newStringFavoriteCity==''){
            newStringFavoriteCity=`${element}`
          }
          else{
          newStringFavoriteCity=`${newStringFavoriteCity},${element}`;
          }
        }
      });
      localStorage.setItem('favoriteCities', newStringFavoriteCity);
    }catch(error)
    {
      alert('Ошибка в функции DeleteElementList');
      alert( " Error message: " +"\n"+ error.message+"\nError stack: \n"+error.stack);
    }
  
}