// inputField function start from here
function getInputValueById(inputField){
     const inputFieldValue = document.getElementById(inputField);
     const inputFieldValues = inputFieldValue.value;
     const inputFieldValuesParse = parseFloat(inputFieldValues);
     inputFieldValue.value = '';
     return inputFieldValuesParse;
}

// innerText function stat from here

function getInnerTextValueById(element){
     const elementId = document.getElementById(element);
     const elementValue = elementId.innerText;
     const elementValues = parseFloat(elementValue);
     return elementValues;
}
// set value element or input field

function setTextElementValueById(element, newValue){
     const elementPramitervalue = document.getElementById(element);
      elementPramitervalue.innerText =newValue; 
}
// sum deposit balance
document.getElementById('btn-Deposit').addEventListener('click', function(){

     const depositField = getInputValueById('deposit-field');

     const totalDeposit = getInnerTextValueById('total-deposit');

     const currentTotalDeposit = depositField + totalDeposit;
     setTextElementValueById('deposit-field', currentTotalDeposit);
})

// withdraw balance start from here
document.getElementById('btn-withdraw').addEventListener('click',function(){
     // withdraw sum function cll and sum
     const withdrawField = getInputValueById('withdraw-field');
     const myWithdrawBalance = getInnerTextValueById('my-withdraw');
     const myCurrentWithdraw = withdrawField + myWithdrawBalance;
     setTextElementValueById('my-withdraw',myCurrentWithdraw); 
    
     // withdraw balance and submission total balance
     const previousTotalBalance = getInnerTextValueById('total-Balance');
     const currentMainBalance = previousTotalBalance - withdrawField;
     setTextElementValueById('total-Balance', currentMainBalance);
     

})






 

