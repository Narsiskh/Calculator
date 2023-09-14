const calculator_input = document.querySelector("input.calculating");
const keys = document.querySelectorAll('.key');
const ac_button = document.querySelector('.all_clear');
const eq_button = document.querySelector('.equal');
const delete_button = document.querySelector('.delete')


ac_button.addEventListener('click', () =>
calculator_input.value = '')

delete_button.addEventListener('click', () => {
    const inputValue = calculator_input.value;
    calculator_input.value = inputValue.slice(0, inputValue.length-1);
})

for (const btn of keys) {
    btn.addEventListener('click', () => {
        const btnValue = btn.innerHTML
        const inputValue = calculator_input.value;
        const operator = ["+", "-", "x", "÷", "%", "."]

        if(!(operator.includes(btnValue) && operator.includes(inputValue[inputValue.length-1])))
            calculator_input.value += btnValue
    })
}

eq_button.addEventListener('click', () => {
    calculator_input.value = eval(calculator_input.value.replace("x", "*").replace("÷", "/"))
})