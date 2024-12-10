let counter = 0;

const plusBtn = document.getElementById('plus_btn');
plusBtn.addEventListener('click', function() {
    counter = counter + getStep();
    writeCounter();
});

const minusBtn = document.getElementById('minus_btn');
minusBtn.addEventListener('click', function(){
    counter = counter - getStep();
    writeCounter();
});


function writeCounter() {
const label = document.querySelector('.label');
label.innerHTML = counter;
}

function getStep(){
    const step = document.querySelector('input');
    const count = step.value;
    return parseInt(count);
}