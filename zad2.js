/*
2. Napisz program, sprawdzajacy czy dany rok jest przestepny.
*/

let rok;
let check;
if (rok % 4 === 0 && rok % 100 !== 0) {
  alert('Twój rok jest przystępny');
}
if (rok % 4 !== 0 && rok % 100 === 0) {
  alert('Twój rok nie jest przystępny');
}
