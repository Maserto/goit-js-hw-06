const refs = {
    valueEl : document.querySelector('#value'),
    decrementButtonEl : document.querySelector('.button[data-action="decrement"]') ,
    incrementButtonEl : document.querySelector('.button[data-action="increment"]'),
}

const counterValue =   {
    value: 0,

    increment () {
        this.value += 1;
    },
    decrement () {
            this.value -=1;
        },
}


const incrementValue = () => {counterValue.increment()
 return  refs.valueEl.textContent = counterValue.value;
  }

 const decrementValue = () => {counterValue.decrement()
  return refs.valueEl.textContent = counterValue.value;
   }

refs.decrementButtonEl.addEventListener ('click', decrementValue);
refs.incrementButtonEl.addEventListener ('click', incrementValue);

