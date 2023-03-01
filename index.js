const screen = document.querySelector('.screen');
//const buttons = document.querySelectorAll('.btn');
const buttons = document.querySelectorAll('[data-num]');
const equal = document.getElementById('btn-equal');


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
        screen.value = answer;
    }
});