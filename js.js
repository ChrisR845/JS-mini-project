// Tip calculator
const subtotal = document.getElementById("subtotal");
const tipPercent = document.getElementById("tipPercent");
const tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
const tipBtn = document.getElementById("tipBtn");

function calculateTip() {
    const subtotalValue = Number(subtotal.value);
    const tipValue = Number(tipPercent.value);
    const tip = subtotalValue * (tipValue / 100);
    const total = subtotalValue + tip;

    tipAmount.textContent = "$" + tip;
    totalAmount.textContent = "$" + total;
}

tipBtn.addEventListener("click", calculateTip);
subtotal.addEventListener("input", calculateTip);
tipPercent.addEventListener("input", calculateTip);
calculateTip();

// Paycheck calculator
const hoursWorked = document.getElementById("hoursWorked");
const hourlyRate = document.getElementById("hourlyRate");
const paycheckAmount = document.getElementById("paycheckAmount");
const paycheckBtn = document.getElementById("paycheckBtn");

function calculatePaycheck() {
    const hours = Number(hoursWorked.value);
    const rate = Number(hourlyRate.value);
    const paycheck = hours * rate;

    paycheckAmount.textContent = "$" + paycheck;
}

paycheckBtn.addEventListener("click", calculatePaycheck);
hoursWorked.addEventListener("input", calculatePaycheck);
hourlyRate.addEventListener("input", calculatePaycheck);
calculatePaycheck();

// Grade calculator
const gradeCalculator = document.getElementById("gradeCalculator");
const totalPoints = document.getElementById("totalPoints");
const yourGrade = document.getElementById("yourGrade");
const gradeBtn = document.getElementById("gradeBtn");

function calculateGrade() {
    const pointsEarned = Number(gradeCalculator.value);
    const pointsPossible = Number(totalPoints.value);
    let grade = 0;

    if (pointsPossible > 0) {
        grade = (pointsEarned / pointsPossible) * 100;
    }

    yourGrade.textContent = grade + "%";
}

gradeBtn.addEventListener("click", calculateGrade);
gradeCalculator.addEventListener("input", calculateGrade);
totalPoints.addEventListener("input", calculateGrade);
calculateGrade();

// Gas cost calculator
const tankSize = document.getElementById("tankSize");
const gasPrice = document.getElementById("gasPrice");
const costFill = document.getElementById("costFill");
const gasBtn = document.getElementById("gasBtn");

function calculateGasCost() {
    const gallons = Number(tankSize.value);
    const pricePerGallon = Number(gasPrice.value);
    const totalCost = gallons * pricePerGallon;

    costFill.textContent = "$" + totalCost;
}

gasBtn.addEventListener("click", calculateGasCost);
tankSize.addEventListener("input", calculateGasCost);
gasPrice.addEventListener("input", calculateGasCost);
calculateGasCost();
