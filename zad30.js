/* Napisz program wyswietlajacy na ekranie sekwencje kolejnych liczb
calkowitych najpierw od 1 do 10, a nastepnie od 10 do 1.
*/

const sequenceBtn = document.getElementById('sequence-btn');
const resultOut = document.getElementById('result-out');

const sequence = () => {
    for(var i = 1; i <= 10; i++){
        if(i % 2 === 0) {
        const p = document.createElement('p');
        p.textContent = i;
        resultOut.appendChild(p); 
        }
    }
}
sequenceBtn.addEventListener('click',sequence);