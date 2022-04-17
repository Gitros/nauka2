/* Napisz program, który wczyta dwie liczby rzeczywiste i wyswietli na
ekranie ich sume z dokladnoscia do trzech miejsc po przecinku.
*/

const liczbaInput = document.getElementById('liczba-input');
const liczbaInput2 = document.getElementById('liczba-input2');
const checkBtn = document.getElementById('check-btn');
const wynik = document.getElementById('wynik');

function oblicz() {
  let sum = (parseFloat(liczbaInput.value) + parseFloat(liczbaInput2.value)).toFixed(3);
  return sum;

}

const buttonClick = () => {
  wynik.textContent = oblicz();
};
checkBtn.addEventListener('click', buttonClick);
