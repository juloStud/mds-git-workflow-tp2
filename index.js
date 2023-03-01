const screen = document.querySelector('.screen');
//const buttons = document.querySelectorAll('.btn');
const buttons = document.querySelectorAll('[data-num]');
const equal = document.getElementById('btn-equal');
const history = document.querySelector('.calculHistory');


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener('click', function (e) {
    console.log='equal'
    if (screen.value == '') {
        screen.value = '';
    } else {
        let answer = eval(screen.value);
        let saveValue = screen.value + " = " +answer;
        screen.value = answer;

        //On stock le calcul effectué dans une div qu'on ajoute au panel de droite
        var newDiv = document.createElement("div");
        newDiv.classList.add('calcul');
        newDiv.textContent = saveValue;
        history.appendChild(newDiv);

    }
});

