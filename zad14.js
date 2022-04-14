const numberInput = document.getElementById('number-input');
const monthBtn = document.getElementById('month-btn');
const result = document.getElementById('result');

const months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];


const findMonth = () => {
    let i = parseInt(numberInput.value);
    if (i >= 1 && i <= 12) {
        i--;
        let month = months[i];
        result.textContent = 'twój miesiąc to ' + month;
    }
    else {
        result.textContent = 'podałeś złą wartość, rok ma 12 miesięcy.';
    }
}

monthBtn.addEventListener('click', findMonth);