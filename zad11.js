/*  wczyta z klawiatury 3 liczby rzeczywiste, a nastepnie 
wyswietli je uporzadkowane rosnaco.*/
const numberInput = document.getElementById('number-input');
const addBtn = document.getElementById('add-btn');
const result = document.getElementById('result');
const numbersOut = document.getElementById('numbers-out');

const numbers = [];
let num = 0;

const sort = () => {
    if (numbers.sorting !== 3) {
        let n = parseInt(numberInput.value);
        numbers.push(n)
    }
    if (numbers.sorting === 3){
        result.textContent = sort(num);
     }
};

addBtn.addEventListener('click', sort);
