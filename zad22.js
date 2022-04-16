/* Napisz program, który w zaleznosci od wyboru uzytkownika bedzie
dokonywał przeliczania z centymetrów na cale i odwrotnie. */
const numberInput = document.getElementById('number-input');
const convertCmBtn = document.getElementById('convertcm-btn');
const convertCalBtn = document.getElementById('convertcal-btn');
const resultOut = document.getElementById('result-out');

const convertToCal = () => {
    const cm = parseFloat(numberInput.value)
    let cal = cm * (0.39)
    resultOut.textContent = cm + ' centymetrow na cale to ' + Math.round(cal);
}
const convertToCm = () => {
    const cal = parseFloat(numberInput.value)
    let cm = cal * (2.54)
    resultOut.textContent = cal + ' cali na cm to ' + cm;
}
convertCmBtn.addEventListener('click', convertToCal);
convertCalBtn.addEventListener('click', convertToCm);