const refs = {
    rangeInput : document.querySelector('#font-size-control'),
    outputTextEl : document.querySelector('#text'),
}

refs.rangeInput.addEventListener('input', changeOutputTextFontSize) 

 function changeOutputTextFontSize(event) {
   refs.outputTextEl.style.fontSize = event.currentTarget.value+'px';


}

console.dir(refs.outputTextEl)