
// // inputType value find out

// function getInputValueById(inputField){
//      const inputFieldValue = document.getElementById(inputField);
//      const innerTextFiledValueString = inputFieldValue.value;
//      const inputFieldValues = parseFloat(innerTextFiledValueString);
//      inputFieldValue.value = '';
//      return inputFieldValues;
     
// }
// // textType value fund out
// function getInnerTextValueById(element){
//      const innerTextFiled = document.getElementById(element);
//      const innerTextFiledValueString = innerTextFiled.innerText;
//      const innerTextFiledValue = parseFloat(innerTextFiledValueString);
//      return innerTextFiledValue;
// }
// // sum to function value 
// function setTextElementValueById(element, newValue){
//     const innerTextFiled = document.getElementById(element);
//     innerTextFiled.innerText = newValue;
// }


// button handler
// document.getElementById('btn-Deposit').addEventListener('click',function(){
     
//      // balance add and sum  start form there
//      const depositField = getInputValueById('deposit-field');
     
//      const totalDepositTotal = getInnerTextValueById('total-deposit');

//      const currentDepositBalance = depositField + totalDepositTotal;
//      setTextElementValueById('total-deposit', currentDepositBalance);
//      // end here

//      // deposit and main balance sum here start form here
     
//      const totalMainBalance = getInnerTextValueById('total-Balance');
//      const currentMainBalance = totalMainBalance + depositField;
//      setTextElementValueById('total-Balance',currentMainBalance) 
//    // total main balance sum ene here

// })

// // withdraw button function addEventListener start form here

// document.getElementById('btn-withdraw').addEventListener('click',function(){

//      // withdraw sum function start from here
//      const withdrawField = getInputValueById('withdraw-field');
     
//      const myWithdrawTotal = getInnerTextValueById('my-withdraw');
//      const myCurrentWithdraw = withdrawField + myWithdrawTotal;
//      setTextElementValueById('my-withdraw', myCurrentWithdraw);
//      // withdraw sum function end from here

//      // withdraw submission main balance start form here
//      const totalMainBalance = getInnerTextValueById('total-Balance');
//      const myCurrentMainBalance = totalMainBalance - withdrawField; 
//      setTextElementValueById('total-Balance', myCurrentMainBalance);

//      // withdraw submission main balance end form here
// })