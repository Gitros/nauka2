/* Napisz program, który dokona zamiany podanej przez uzytkownika
liczby naturalnej od 1 do 7 na odpowiadajacy jej dzien tygodnia.
Obsluz sytuacje, gdy uzytkownik poda wartosc spoza zakresu. */

const numberInput = document.getElementById('number-input');
const dayBtn = document.getElementById('day-btn');
const result = document.getElementById('result');


const weekDays = ['poniedziałek','wtorek','środa','czwartek','piątek','sobota','niedziela'];


const findWeek = () => {
    let i = parseInt(numberInput.value);
    if (i >= 1 && i <= 7 ) {
        i--;
        let day = weekDays[i]; 
        result.textContent = 'twój dzień tygodnia to ' + day;
    }
    else {
        result.textContent = 'podałeś zły dzień tydzien ma 7 dni';
    };
}
dayBtn.addEventListener('click', findWeek);