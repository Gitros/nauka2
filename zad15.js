/* Napisz program, który wczyta liczbe rzeczywista i wydrukuje pierwiastek 
z tej liczby z dokladnoscia do 5 miejsc oraz kwadrat tej liczby.
Pamietaj, ze pierwiastkowac mozna tylko liczby nieujemne */

const numberInput = document.getElementById('number-input');
const mathBtn = document.getElementById('math-btn');
const result = document.getElementById('result');

const sqrt5 = (number) => {
    return Math.sqrt(number).toFixed(5);
}

const pow2 = (number) => {
    return Math.pow(number, 2);
}

const buttonClick = () => {
    let number = parseInt(numberInput.value);
    let result1 = sqrt5(number);
    let result2 = pow2(number);
    result.textContent = 'pierwiastek z liczby: ' + result1 + ' kwadrat tej liczby: ' + result2;
}
mathBtn.addEventListener('click',buttonClick);