
//visual.js
btnToday  =  document.getElementById('today');
btnTomorrow  =  document.getElementById('tomorrow');
//нужно универсальную кнопку (close) btnX  =  document.querySelectorAll('.btn-x');
closeToday  =  document.querySelector('.close-form-today');
closeTomorrow  =  document.querySelector('.close-form-tomorrow')
formToday  =  document.querySelector('.form-today');
formTomorrow  =  document.querySelector('.form-tomorrow');

btnToday.onclick  =  function(){
    formToday.classList.add('form-window');
    formTomorrow.classList.remove('form-window');
}

btnTomorrow.onclick  =  function(){
    formTomorrow.classList.add('form-window');
    formToday.classList.remove('form-window');
}

closeToday.onclick  =  function(){
    formToday.classList.remove('form-window');
}

closeTomorrow.onclick  =  function(){
    formTomorrow.classList.remove('form-window');
}

//create.js

