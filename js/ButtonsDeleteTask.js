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
      console.log(arrayFavoriteCity);
      let newStringFavoriteCity='';
      arrayFavoriteCity.forEach(element => {
        console.log(element);
        console.log(event.target.closest('.location').querySelector('.nameLocation').textContent);
        const deleteCity = event.target.closest('.location').querySelector('.nameLocation');
        if(element==event.target.closest('.location').querySelector('.nameLocation').textContent){

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
      console.log(newStringFavoriteCity);
      localStorage.setItem('favoriteCities', newStringFavoriteCity);
    }catch(error)
    {
      alert('Ошибка в функции DeleteElementList');
      alert( " Error message: " +"\n"+ error.message+"\nError stack: \n"+error.stack);
    }
  
}