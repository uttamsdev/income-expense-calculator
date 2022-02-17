document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = parseFloat(incomeInput.value);
    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseFloat(rentInput.value);
    const clothInput = document.getElementById('cloth-input');
    const clothInputValue = parseFloat(clothInput.value);

    const totalExpenses = document.getElementById('total-expenses');
    const updatedTotalExpenses = foodInputValue + rentInputValue + clothInputValue;
    totalExpenses.innerText = updatedTotalExpenses;

    const balanceText = document.getElementById('balance-text');
    // const balanceTextValue = balanceText.innerText;
    balanceText.innerText = incomeInputValue - updatedTotalExpenses;
});

document.getElementById('save-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = parseFloat(incomeInput.value);    
    const savingInput = document.getElementById('saving-input');
    const savingInputValue = parseFloat(savingInput.value);
    const savingAmount = document.getElementById('saving-amount');
    const updatedSavngAmount = (incomeInputValue * (savingInputValue/100));
    savingAmount.innerText = updatedSavngAmount;

    const balanceText = document.getElementById('balance-text').innerText;
    const remainingBalace = document.getElementById('remaining-balance');
    remainingBalace.innerText = parseFloat(balanceText) - updatedSavngAmount;


})