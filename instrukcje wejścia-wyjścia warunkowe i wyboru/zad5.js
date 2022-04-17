/* Napisz program, który wczyta dwie liczby rzeczywiste i wyswietli na
ekranie ich sume, róznice oraz iloczyn z dokladnoscia do dwóch miejsc
po przecinku.
*/

const liczbaInput = document.getElementById('liczba-input');
const liczbaInput2 = document.getElementById('liczba-input2');
const sumaBtn = document.getElementById('suma-btn');
const roznicaBtn = document.getElementById('roznica-btn');
const iloczynBtn = document.getElementById('iloczyn-btn');
const wynik = document.getElementById('wynik');

function suma() {
  let result = (parseFloat(liczbaInput.value) + parseFloat(liczbaInput2.value)).toFixed(2);
  return result;
}
function roznica() {
    let result = (parseFloat(liczbaInput.value) - parseFloat(liczbaInput2.value)).toFixed(2);
    return result;
}
function iloczyn() {
    let result = (parseFloat(liczbaInput.value) * parseFloat(liczbaInput2.value)).toFixed(2);
    return result;
}
const buttonClickSuma = () => {
  wynik.textContent = suma();
};
const buttonClickRoznica = () => {
  wynik.textContent = roznica();
};
const buttonClickIloczyn = () => {
  wynik.textContent = iloczyn();
};
sumaBtn.addEventListener('click', buttonClickSuma);
roznicaBtn.addEventListener('click', buttonClickRoznica);
iloczynBtn.addEventListener('click', buttonClickIloczyn);
