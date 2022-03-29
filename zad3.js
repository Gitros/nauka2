/*
Napisz program, który wyswietli wartosc bezwzgledna z podanej przez
uzytkownika liczby
*/
const liczbaInput = document.getElementById('liczba-input');
const checkBtn = document.getElementById('check-btn');

const sprawdz = () => {
  return Math.abs(liczbaInput.value);
};

const buttonClick = () => {
  wynik.textContent = sprawdz();
};
checkBtn.addEventListener('click', buttonClick);
