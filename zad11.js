/*  wczyta z klawiatury 3 liczby rzeczywiste, a nastepnie 
wyswietli je uporzadkowane rosnaco.*/
const numberInput = document.getElementById('number-input');
const addBtn = document.getElementById('add-btn');
const result = document.getElementById('result');

const numbers = [];

const sort = () => {
    if (numbers.length !== 3) {
        let n = parseInt(numberInput.value);
        numbers.push(n);
        numberInput.value = null;
    }

    if (numbers.length === 3){
        result.textContent = numbers.sort();
    }
};

addBtn.addEventListener('click', sort);
