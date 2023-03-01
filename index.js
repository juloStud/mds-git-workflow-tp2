const screen = document.getElementById('screen');
const screenOldValue = document.getElementById('screen-value');
const buttons = document.querySelectorAll('[data-num]');
const equalBtn = document.getElementById('btn-equal');

let beforeEqual = false;

function writeElement(value) {
    const regex = /^[/*+-]$/;
    if (regex.test(value)) {
        if (beforeEqual) {
            screenOldValue.value = screen.value;
            beforeEqual = false;
        } else {
            const calcul = screenOldValue.value.toString() + screen.value.toString();
            screenOldValue.value = eval(calcul);
        }
        screen.value = '';
    }
    screen.value += value;
}

function calculResult() {
    const calcul = screenOldValue.value.toString() + screen.value.toString();
    let answer = eval(calcul);
    beforeEqual = true
    screen.value = answer;
}

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        writeElement(e.target.dataset.num);
    })
});

equalBtn.addEventListener('click', function (e) {
    calculResult();
});

document.addEventListener("keydown", function(event) {
    const regex = /[0-9\/*+-.]/;
    if (regex.test(event.key)) {
      writeElement(event.key);
    } else if (event.key === "Enter") {
      calculResult();
    }
  });
  