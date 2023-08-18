


// shared function 
function getINputValue(inputFiled){
     const getINputField = document.getElementById(inputFiled);
     const getINputFieldString = getINputField.value;
     const inputValue = parseFloat(getINputFieldString);
     getINputField.value = '';
     return inputValue;

}

function parallelogramArea(){

   const base = getINputValue('parallelogram-base');
     
   const height = getINputValue('parallelogram-Height');
   
   const totalValue = base * height;
   
   const parallelogramArea = document.getElementById('parallelogram-Area');
   parallelogramArea.innerText = totalValue

     

}