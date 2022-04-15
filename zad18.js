/* Napisz program, który wczyta dlugosci trzech odcinków i sprawdzi,
jaki trójkat mozna z nich zbudowac
 (jakikolwiek, prostokatny, równoboczny, równoramienny). */

 const numberInput = document.getElementById('number-input');
 const numberInput2 = document.getElementById('number-input2');
 const numberInput3 = document.getElementById('number-input3');
 const checkBtn = document.getElementById('check-btn');
 const result = document.getElementById('result');

 const check = () => {
     
 let a = parseInt(numberInput.value);
 let b = parseInt(numberInput2.value);
 let c = parseInt(numberInput3.value);

    if ( a === b && a === c && b===c ) {
        return 'twój trójkąt jest równoboczny';
    }

    if ( a*a + b*b  === c*c && a*a + c*c  === b*b && b*b + c*c  === a*a) {
        return 'twój trójkąt jest prostokątny';
    }
    if ( a === b || b === c || a === c) {
        return 'twój trójkąt jest równoramienny';
    }
    if ( a + b < c && b + c <a && c + a < b) {
        return 'możesz zbuodwać zwykły trójkąt';
    }

    return 'costam';
};

const buttonClickCheck = () => {
    result.textContent = check();
}

checkBtn.addEventListener('click', buttonClickCheck);