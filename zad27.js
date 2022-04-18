/* Napisz program rysujucy na ekranie poziome kreski (ze znaków minus)
o dlugosci zadawanej z klawiatury.
*/
const numberInput = document.getElementById('number-input');
const paintBtn = document.getElementById('paint-btn');
const resultOut = document.getElementById('result-out');

const paint = () => {
    resultOut.textContent = null;
    let n = parseInt(numberInput.value);
    const p = document.createElement('p');
    for(var i = 0; i < n; i++) {
        p.textContent += '-';
    }
    resultOut.appendChild(p);
}

paintBtn.addEventListener('click', paint);