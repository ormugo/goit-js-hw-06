const categoriesList = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('li.item');

console.log('Número de categorías:', categoryItems.length);

categoryItems.forEach((categoryItem) => {
    
    const title = categoryItem.querySelector('h2').textContent;
    const articleCount = categoryItem.querySelectorAll('ul li').length;
    
    console.log('Título del artículo:', title);

    console.log('Número de artículos en la categoría:', articleCount);
});