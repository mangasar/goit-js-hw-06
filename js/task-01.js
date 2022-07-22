const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length)

const categoriesEl = document.querySelectorAll('li.item');

categoriesEl.forEach((category) => {
    console.log(`Category:${category.firstElementChild.textContent}`)
    console.log(`Elements: ${category.lastElementChild.children.length}`)
});