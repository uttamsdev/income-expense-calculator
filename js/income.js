function getInputvalue(inputID){
    const inputField = document.getElementById(inputID);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}



document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInputValue = getInputvalue('income-input');
    const foodInputValue = getInputvalue('food-input');
    const rentInputValue = getInputvalue('rent-input');
    const clothInputValue = getInputvalue('cloth-input');

    const totalExpenses = document.getElementById('total-expenses');
    const updatedTotalExpenses = foodInputValue + rentInputValue + clothInputValue;
    totalExpenses.innerText = updatedTotalExpenses;

    const balanceText = document.getElementById('balance-text');
    balanceText.innerText = incomeInputValue - updatedTotalExpenses;
});

document.getElementById('save-btn').addEventListener('click', function(){
    const incomeInputValue = getInputvalue('income-input');
    const savingInputValue = getInputvalue('saving-input');
    
    const savingAmount = document.getElementById('saving-amount');
    const updatedSavngAmount = (incomeInputValue * (savingInputValue/100));
    savingAmount.innerText = updatedSavngAmount;

    const balanceText = document.getElementById('balance-text').innerText;
    const remainingBalace = document.getElementById('remaining-balance');
    remainingBalace.innerText = parseFloat(balanceText) - updatedSavngAmount;


})