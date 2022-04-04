/* napisz program, wczyta długosci boków prostokata i obliczy jego obwód oraz pole. */

const liczbaInput = document.getElementById('liczba-input');
const liczbaInput2 = document.getElementById('liczba-input2');
const obwodBtn = document.getElementById('obwod-btn');
const poleBtn = document.getElementById('pole-btn');
const wynik = document.getElementById('wynik');

function obwod(){
    let result = parseInt(liczbaInput.value) + parseInt(liczbaInput2.value);
    return result * 2
}
function pole(){
    let result = parseInt(liczbaInput.value) * parseInt(liczbaInput2.value);
    return result
}

const buttonClickObwod = () => {
    wynik.textContent = obwod();
  };
  obwodBtn.addEventListener('click', buttonClickObwod);

const buttonClickPole = () => {
    wynik.textContent = pole();
  };
  poleBtn.addEventListener('click', buttonClickPole);