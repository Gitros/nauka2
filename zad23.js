/*  Napisz program, który oblicza rozwiazanie równania postaci: ax2+bx+
c = 0. Wartosci a, b i c wczytaj od uzytkownika. Rozpatrz wszystkie
mozliwe przypadki wartosci wspólczynników a, b, c.
*/

const numberInput1 = document.getElementById('number-input1');
const numberInput2 = document.getElementById('number-input2');
const numberInput3 = document.getElementById('number-input3');

const calculateBtn = document.getElementById('calculate-btn');
const resultOut = document.getElementById('result-out');

const calculate = () => {
    let a = parseInt(numberInput1.value)
    let b = parseInt(numberInput2.value)
    let c = parseInt(numberInput3.value)

    with (math) {
        a * pow(x,2) + b * x + c == 0;
    }
    resultOut.textContent = calculate;
}

calculateBtn.addEventListener('click', calculate);
