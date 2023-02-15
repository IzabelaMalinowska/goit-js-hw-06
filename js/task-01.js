console.log(document);
const categories = document.querySelectorAll(".item");
console.log(`numberOfCategories:${categories.length}`);

categories.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`)
});