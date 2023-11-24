
export const menuHiden = function(event){
    const arrayWindow=document.querySelectorAll('.main_window_information');
    arrayWindow.forEach(element => {
     const hideItem = element.classList.contains('hide');
     const addHideItem = element.classList.add('hide');
     if(!hideItem)
     addHideItem;
    });
    const currentWindow = `.${event.target.textContent}`
   document.querySelector(`${currentWindow}`).classList.remove('hide')
 }