const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length)

const categoriesEl = document.querySelectorAll('li.item');

categoriesEl.forEach((category) => {
    console.log(category.firstElementChild.length)
    console.log(category.firstElementChild.length)
});