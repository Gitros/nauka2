/* Napisz program, który w zaleznosci od wyboru uzytkownika przeliczy
wartosc pomiedzy centymetrami a calami. */

const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const resultOut = document.getElementById('result-out');

const convert = () => {
    const cen = parseFloat(numberInput.value)
    let cal = cen * (0.39)
    resultOut.textContent = cen + 'zamieniając na cale to ' +  Math.round(cal);
}

convertBtn.addEventListener('click', convert);