/*Napisz program, który wczyta z klawiatury 4 liczby rzeczywiste,
 a nastepnie wyswietli informacje ile z nich jest mniejszych od 0. */

const numberInput = document.getElementById('number-input');
const addBtn = document.getElementById('add-btn');
const result = document.getElementById('result');
const numbersOut = document.getElementById('numbers-out');

const numbers = [];
let counter = 0;


const add = () => {
  if (numbers.length !== 4) {
    let n = parseInt(numberInput.value);
    numbers.push(n);
    const span = document.createElement('span');
    span.textContent = n + ' ';
    numbersOut.appendChild(span);
    numberInput.value = null;

    if (n < 0) {
      counter++;
    }

    if (numbers.length === 4){
       result.textContent = counter;
    }
  }
}

addBtn.addEventListener('click', add);
