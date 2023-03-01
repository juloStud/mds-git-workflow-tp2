const screen = document.getElementById('screen');
const screenOldValue = document.getElementById('screen-value');
const buttons = document.querySelectorAll('[data-num]');
const equalBtn = document.getElementById('btn-equal');

let beforeEqual = false;

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.classList.contains('funcbtn')) {
            if (beforeEqual) {
                screenOldValue.value = screen.value;
                beforeEqual = false;
            } else {
                const calcul = screenOldValue.value.toString() + screen.value.toString();
                screenOldValue.value = eval(calcul);
            }
            screen.value = '';
        }
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equalBtn.addEventListener('click', function (e) {
    const calcul = screenOldValue.value.toString() + screen.value.toString();
    let answer = eval(calcul);
    beforeEqual = true
    screen.value = answer;
});