const numberInput = document.getElementById('number-input');
const markInput = document.getElementById('mark-input');
const paintBtn = document.getElementById('paint-btn');
const resultOut = document.getElementById('result-out');

const paint = () => {
    let n = parseInt(numberInput.value);
    let m = markInput.value;
    const p = document.createElement('p');
    for(var i = 0; i < n; i++) {
        p.textContent += m;
    }
    resultOut.appendChild(p);
}

paintBtn.addEventListener('click', paint);