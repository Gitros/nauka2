/* . Napisz program, który wylosuje 100 liczb. Podczas losowania na bieza-
co obliczaj ich sume, wartosc minimalna i maksymalna. Po zakonczeniu
losowania wyswietl na ekranie nastepujacy komunikat: srednia wylosowanych 
liczb wynosi ***. Spo±ród nich wartosc minimalna to ***, a
maksymalna ***. Znaki *** zastap wyliczonymi wartosciami. */
const drawBtn = document.getElementById('draw-btn');
const resultOut = document.getElementById('result-out')

const draw = () => {
    for(var i = 0; i < 100; i++) {
        const min = Math.ceil();
        const max = Math.floor();
        i =  Math.floor(Math.random() * (max - min)) + min;
        const p = document.createElement('p');
        resultOut.appendChild(p);
    }
}

drawBtn.addEventListener('click', draw);