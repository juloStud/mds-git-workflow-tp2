const screen = document.getElementById('screen');
const screenOldValue = document.getElementById('screen-value');
const buttons = document.querySelectorAll('[data-num]');
const equal = document.getElementById('btn-equal');
const history = document.querySelector('.calculHistory');
const equalBtn = document.getElementById('btn-equal');
const clearErrorBtn = document.getElementById('btn-clear-error');
const clearAllBtn = document.getElementById('btn-clear');

let beforeEqual = false;

function writeElement(value) {
    const regex = /^[/*+-]$/;
    if (regex.test(value)) {
        if (beforeEqual) {
            screenOldValue.value = screen.value;
            beforeEqual = false;
        } else {
            if(!screenOldValue.value) {
                screenOldValue.value = screen.value;
            } else {
                const calcul = screenOldValue.value.toString() + screen.value.toString();
                let answer = eval(calcul);
                screenOldValue.value = answer;
                addToHistory(calcul, answer);
            }
        }
        screen.value = '';
    }
    screen.value += value;
}

function addToHistory(calcul, answer){
    let saveValue = calcul + " = " +answer;
    const oldCalculs = document.querySelector('.lastCalc');
    if(oldCalculs){
        oldCalculs.classList.replace("lastCalc","calcul");
    }
    const newDiv = document.createElement("div");
    newDiv.classList.add('historyElement');
    newDiv.classList.add('lastCalc');
    newDiv.textContent = saveValue;
    history.appendChild(newDiv);
}

function calculResult() {
    const calcul = screenOldValue.value.toString() + screen.value.toString();
    let answer = eval(calcul);
    addToHistory(calcul, answer);
    beforeEqual = true
    screen.value = answer;


}

function clear(all) {
    if (all) {
        screenOldValue.value = '';
        const historyElements = document.querySelectorAll('.historyElement');
        historyElements.forEach(el => el.remove());

    }
    screen.value = '';
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

clearErrorBtn.addEventListener('click', function (e) {
    clear();
})

clearAllBtn.addEventListener('click', function (e) {
    clear(true);
})
