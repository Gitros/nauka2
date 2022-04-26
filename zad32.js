/* Napisz program wyswietlajacy na ekranie kolejne 20 liczb parzystych
poczawszy od zadanej przez uzytkownika liczby. */
const numberInput = document.getElementById('number-input');
const evenBtn = document.getElementById('even-btn');
const resultOut = document.getElementById('result-out');

const even = () => {
    const n = parseInt(numberInput.value);
    for(var i = n; i < 20; i++) {
    const p = document.createElement('p');
        if(n % 2 === 0){
            p.textContent = n;
        }
        resultOut.appendChild(p);
    }
}
evenBtn.addEventListener('click',even);