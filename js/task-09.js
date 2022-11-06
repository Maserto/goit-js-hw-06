
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body : document.querySelector('body'),
  colorValue : document.querySelector('.color'),
  buttonChangeColor : document.querySelector('.change-color')
}

// Я вирішив зробити і зміну кольору самої кнопки

const onButtonChangeColorClick = (event) => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = refs.body.style.backgroundColor;
  event.currentTarget.style.backgroundColor = getRandomHexColor();
  
  }
  refs.buttonChangeColor.addEventListener('click', onButtonChangeColorClick);
  





