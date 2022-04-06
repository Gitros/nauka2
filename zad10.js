/*Napisz program, który wczyta z klawiatury 4 liczby rzeczywiste,
 a nastepnie wyswietli informacje ile z nich jest mniejszych od 0. */

 const liczbaInput = document.getElementById('liczba-input')
 const obliczBtn = document.getElementById('oblicz-btn')
 const wynik = document.getElementById('wynik');

 function oblicz() {
     let result = 0; 
     if (parseFloat(liczbaInput.value) < 0)result++ ;
     return result
 }

 const buttonClickOblicz = () => {
    wynik.textContent = oblicz();
  };
  obliczBtn.addEventListener('click', buttonClickOblicz);