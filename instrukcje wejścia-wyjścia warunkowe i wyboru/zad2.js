/*
2. Napisz program, sprawdzajacy czy dany rok jest przestepny.
*/

let rokInput = document.getElementById('rok-input');
let checkBtn = document.getElementById('check-btn');
let wynikOut = document.getElementById('wynik');

function sprawdz() {
  if (rokInput.value % 4 === 0 && rokInput.value % 100 !== 0) {
    return 'Twój rok jest przystępny';
  } else {
    return 'Twój rok nie jest przystępny';
  }
}

const buttonClick = () => {
  wynik.textContent = sprawdz();
};

checkBtn.addEventListener('click', buttonClick);
