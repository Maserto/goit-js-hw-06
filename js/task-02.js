const listEl = document.querySelector('#ingredients')



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const componentsEl = ingredients.map(ingredient => {
  const component = document.createElement('li')
  component.textContent = ingredient;
  component.classList.add('item')
return component
});
listEl.append(...componentsEl);

console.log (listEl);


