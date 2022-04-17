/* Napisz program, który wczyta od uzytkownika dlugosc promienia i
obliczy obwód oraz pole kola. */

const liczbaInput = document.getElementById('liczba-input');
const obwodBtn = document.getElementById('obwod-btn');
const poleBtn = document.getElementById('pole-btn');
const wynik = document.getElementById('wynik');

function pole(){
    let result =  3.14 * Math.pow(parseInt(liczbaInput.value), 2) ;
    return result 
}

function obwod(){
  let result = 2 * 3.14 * parseInt(liczbaInput.value);
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