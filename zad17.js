/*  Napisz program, który wczyta dlugosci trzech odcinków i sprawdzi, czy
da sie z nich zbudowac trójkat. */
const numberInput = document.getElementById('number-input');
const numberInput2 = document.getElementById('number-input2');
const numberInput3 = document.getElementById('number-input3');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const check = () => {
    let a = parseInt(numberInput.value);
    let b = parseInt(numberInput2.value);
    let c = parseInt(numberInput3.value);
    if (a + b < c && a + c < b && c + b < a) {
    let obwodTrojkata  = a + b + c;
    return 'obwod tego trojkata wynosi ' + obwodTrojkata
    } 
    else {
        return 'nie mozna zbudowac z tych bokow trojkata'
    }
};
const buttonClickCheck = () => {
    result.textContent = check()
}
checkBtn.addEventListener('click', buttonClickCheck);
