const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

const insertInputIntoOutput = (event) => {return inputEl.value.length === 0
    ? outputEl.textContent = 'Anonymous'
    : outputEl.textContent = event.currentTarget.value;}

inputEl.addEventListener('input', insertInputIntoOutput);
// console.log(inputEl)