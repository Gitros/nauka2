/* Napisz program rysujucy na ekranie poziome kreski (ze znaków minus)
o dlugosci zadawanej z klawiatury.
*/
const numberInput = document.getElementById('number-input');
const paintBtn = document.getElementById('paint-btn');
const resultOut = document.getElementById('result-out');

const rysunek = () => {
    let kreska = parseInt(numberInput.value)
    if (kreska > 0, kreska++) {
        resultOut =  '-'
    }
    else {
        return 'podano zla wartosc'
    }

}