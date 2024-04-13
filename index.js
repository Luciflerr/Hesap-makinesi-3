const display = document.getElementById('display');
const colorChange = document.querySelector('.changeButton');
const container = document.querySelector('.container');
const btn = document.querySelectorAll('button');
const operator = document.querySelectorAll('.operator');

function appendToDisplay(input){
    display.value += input;
}
function clearC(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}

colorChange.addEventListener('click', () => {
    container.style.background = 'linear-gradient(300deg, #ffe0c9, #fdc4c4)';
    display.style.background = 'linear-gradient(300deg, #ffe0c9, #fdc4c4)';
    btn.forEach(button => {
        button.style.background = 'linear-gradient(150deg, #ffe0c9, #fdc4c4)';
    })
    operator.forEach(operator => {
        operator.style.background ='linear-gradient(150deg, #ebf4b9, #e1beff)';
    })
})
