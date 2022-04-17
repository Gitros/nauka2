/*
Napisz program, który wyswietli wartosc bezwzgledna z podanej przez
uzytkownika liczby
*/
const liczbaInput = document.getElementById('liczba-input');
const checkBtn = document.getElementById('check-btn');

const oblicz = () => {
  return Math.abs(liczbaInput.value);
};

const buttonClick = () => {
  wynik.textContent = oblicz();
};
checkBtn.addEventListener('click', buttonClick);
