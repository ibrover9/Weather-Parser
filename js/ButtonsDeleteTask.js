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
    }catch(error)
    {
      alert('Ошибка в функции DeleteElementList');
      alert( " Error message: " +"\n"+ error.message+"\nError stack: \n"+error.stack);
    }
  
}