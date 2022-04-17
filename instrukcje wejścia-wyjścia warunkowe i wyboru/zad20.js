/* Napisz program, który po podaniu odleglosci w centymetrach (liczba
calkowita) wypisze ta odleglosc w metrach, decymetrach i centymetrach. Przyklad:
 123 cm to 1 metr, 2 decymetry i 3 centymetry.
*/

const numberInput = document.getElementById('number-input');
const checkBtn = document.getElementById('check-btn');  
const resultOut = document.getElementById('result-out');
const sizes = ['centymetry','decymetry','metry'];

const wypisz = () => {
    let number = parseInt(numberInput.value);
    let numberString = number.toString();
    
    if (numberString.length > 3) {
        resultOut.textContent = 'zła wartosć';
        return;
    }

    let j = numberString.length - 1; 
    let result = '';

    for(let i = 0; i < numberString.length; i++) {
        result += numberString[i] + ' ' + sizes[j] + ' ';
        j--;
    }
    resultOut.textContent = result;
}

checkBtn.addEventListener( 'click', wypisz);