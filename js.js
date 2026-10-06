const formatCurrency = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

const subtotalInput = document.getElementById('subtotal');
const tipPercentInput = document.getElementById('tipPercent');
const tipAmount = document.getElementById('tipAmount');
const totalAmount = document.getElementById('totalAmount');

function updateTip() {
    const subtotal = Number(subtotalInput.value) || 0;
    const tipPercent = Number(tipPercentInput.value) || 0;
    const tip = subtotal * (tipPercent / 100);
    const total = subtotal + tip;

    tipAmount.textContent = formatCurrency(tip);
    totalAmount.textContent = formatCurrency(total);
}

subtotalInput.addEventListener('input', updateTip);
tipPercentInput.addEventListener('input', updateTip);
updateTip();

const hourlyRateInput = document.getElementById('hourlyRate');
const hoursWorkedInput = document.getElementById('hoursWorked');
const taxRateInput = document.getElementById('taxRate');
const grossPay = document.getElementById('grossPay');
const taxesPay = document.getElementById('taxesPay');
const netPay = document.getElementById('netPay');
const paycheckBtn = document.getElementById('paycheckBtn');

function calculatePaycheck() {
    const hourlyRate = Number(hourlyRateInput.value) || 0;
    const hoursWorked = Number(hoursWorkedInput.value) || 0;
    const taxRate = Number(taxRateInput.value) || 0;

    const gross = hourlyRate * hoursWorked;
    const taxes = gross * (taxRate / 100);
    const takeHome = gross - taxes;

    grossPay.textContent = formatCurrency(gross);
    taxesPay.textContent = formatCurrency(taxes);
    netPay.textContent = formatCurrency(takeHome);
}

paycheckBtn.addEventListener('click', calculatePaycheck);
[hourlyRateInput, hoursWorkedInput, taxRateInput].forEach((input) => {
    input.addEventListener('input', calculatePaycheck);
});
calculatePaycheck();

const homeworkScoreInput = document.getElementById('homeworkScore');
const testScoreInput = document.getElementById('testScore');
const finalExamScoreInput = document.getElementById('finalExamScore');
const finalGrade = document.getElementById('finalGrade');
const letterGrade = document.getElementById('letterGrade');
const gradeBtn = document.getElementById('gradeBtn');

function calculateGrade() {
    const homework = Number(homeworkScoreInput.value) || 0;
    const testScore = Number(testScoreInput.value) || 0;
    const finalExamScore = Number(finalExamScoreInput.value) || 0;

    const weightedAverage = (homework * 0.3) + (testScore * 0.3) + (finalExamScore * 0.4);
    finalGrade.textContent = `${weightedAverage.toFixed(1)}%`;

    if (weightedAverage >= 90) {
        letterGrade.textContent = 'A';
    } else if (weightedAverage >= 80) {
        letterGrade.textContent = 'B';
    } else if (weightedAverage >= 70) {
        letterGrade.textContent = 'C';
    } else if (weightedAverage >= 60) {
        letterGrade.textContent = 'D';
    } else {
        letterGrade.textContent = 'F';
    }
}

gradeBtn.addEventListener('click', calculateGrade);
[homeworkScoreInput, testScoreInput, finalExamScoreInput].forEach((input) => {
    input.addEventListener('input', calculateGrade);
});
calculateGrade();

const distanceMilesInput = document.getElementById('distanceMiles');
const fuelEconomyInput = document.getElementById('fuelEconomy');
const gasPriceInput = document.getElementById('gasPrice');
const fuelNeeded = document.getElementById('fuelNeeded');
const tripCost = document.getElementById('tripCost');
const gasBtn = document.getElementById('gasBtn');

function calculateGasCost() {
    const distance = Number(distanceMilesInput.value) || 0;
    const mpg = Number(fuelEconomyInput.value) || 0;
    const price = Number(gasPriceInput.value) || 0;

    const gallonsNeeded = (distance / mpg) || 0;
    const totalGasCost = gallonsNeeded * price;

    fuelNeeded.textContent = `${gallonsNeeded.toFixed(2)} gal`;
    tripCost.textContent = formatCurrency(totalGasCost);
}

gasBtn.addEventListener('click', calculateGasCost);
[distanceMilesInput, fuelEconomyInput, gasPriceInput].forEach((input) => {
    input.addEventListener('input', calculateGasCost);
});
calculateGasCost();
