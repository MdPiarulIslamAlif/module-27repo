document.getElementById('btn-Deposit').addEventListener('click',function(){
     
     // balance add and sum  start form there
     const depositField = getInputValueById('deposit-field');
     
     const totalDepositTotal = getInnerTextValueById('total-deposit');

     const currentDepositBalance = depositField + totalDepositTotal;
     setTextElementValueById('total-deposit', currentDepositBalance);
     // end here

     // deposit and main balance sum here start form here
     
     const totalMainBalance = getInnerTextValueById('total-Balance');
     const currentMainBalance = totalMainBalance + depositField;
     setTextElementValueById('total-Balance',currentMainBalance) 
   // total main balance sum ene here

})
