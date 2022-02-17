function getInputvalue(inputID){
    const inputField = document.getElementById(inputID);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

function getID(id){
    const docID = document.getElementById(id);
    return docID;
}

function displayError(id,numberError,negativeError){
    const inputField = getID(id);
    const display = getID(numberError);
    const display2 = getID(negativeError);
    const inputFieldValue = inputField.value;
  
    if(inputFieldValue == '-'){
        display2.style.display = 'block';
        display.style.display = 'none';
        inputField.value = '';
    }
    else if(isNaN(inputFieldValue)){
        display.style.display = 'block';
         display2.style.display = 'none';
        inputField.value = '';

        // alert('Enter number value');
    }
    if(inputFieldValue >= 0){
        display.style.display = 'none';
        display2.style.display = 'none';
    }
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInputValue = getInputvalue('income-input');
    const foodInputValue = getInputvalue('food-input');
    const rentInputValue = getInputvalue('rent-input');
    const clothInputValue = getInputvalue('cloth-input');

    const totalExpenses = getID('total-expenses');
    const updatedTotalExpenses = foodInputValue + rentInputValue + clothInputValue;
    totalExpenses.innerText = updatedTotalExpenses;

    const balanceText = getID('balance-text');
    balanceText.innerText = incomeInputValue - updatedTotalExpenses;
});

document.getElementById('save-btn').addEventListener('click', function(){
    const incomeInputValue = getInputvalue('income-input');
    const savingInputValue = getInputvalue('saving-input');
    
    const savingAmount = getID('saving-amount');
    const updatedSavngAmount = (incomeInputValue * (savingInputValue/100));
    savingAmount.innerText = updatedSavngAmount;

    const balanceText = document.getElementById('balance-text').innerText;
    const remainingBalace = getID('remaining-balance');
    remainingBalace.innerText = parseFloat(balanceText) - updatedSavngAmount;
})

document.getElementById('income-input').addEventListener('keyup', function(){
    displayError('income-input','number-error','negative-error');
})

document.getElementById('food-input').addEventListener('keyup', function(){
    displayError('food-input','number-error2','negative-error2');
})

document.getElementById('rent-input').addEventListener('keyup', function(){
    displayError('rent-input','number-error3','negative-error3');
})

document.getElementById('cloth-input').addEventListener('keyup', function(){
    displayError('cloth-input','number-error4','negative-error4');
})

document.getElementById('saving-input').addEventListener('keyup', function(){
    displayError('saving-input','number-error5','negative-error5');
})