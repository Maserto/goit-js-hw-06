
 

const navEl = document.querySelector('ul#categories');



console.log (`Number of categories: ${navEl.children.length} `)

const navItemsEl = document.querySelectorAll('li.item');

// частину зробив функцією щоб потренувати функції

function getNameAndQuantityOfChildren (arr){
arr.forEach(element => {
    
        console.log (`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    }); 
}
getNameAndQuantityOfChildren(navItemsEl)