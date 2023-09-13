// Select all numbers, operators, plus, all clear and equal buttons
const buttons = document.querySelectorAll('.number, .key--operator, .key--plus');
const acButtons = document.querySelector('.all_clear');
const equalButtons = document.querySelector('.equal')

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const input = document.querySelector('.calculating');
