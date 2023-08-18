


// shared function 
function getINputValue(inputFiled){
     const getINputField = document.getElementById(inputFiled);
     const getINputFieldString = getINputField.value;
     const inputValue = parseFloat(getINputFieldString);
     getINputField.value = '';
     return inputValue;

}
// set value area
function setValueGetElement(ElementId, area){
     const element = document.getElementById(ElementId);
     element.innerText = area
}

// ellipse function find out
function ellipseArea(){
     const ellipseLarge = getINputValue('ellipse-large');
     const ellipseShort = getINputValue('ellipse-short');
     const area = 3.14 * ellipseLarge * ellipseShort;
     setValueGetElement('ellipse-Area', area)
     
}

function parallelogramArea(){

   const base = getINputValue('parallelogram-base');
     
   const height = getINputValue('parallelogram-Height');

   const area = base * height;
   
   setValueGetElement('parallelogram-Area', area);

}