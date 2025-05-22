// Отримуємо список категорій
const categoriesList = document.querySelector("#categories");

// Отримуємо всі елементи li.item
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо загальну кількість категорій
console.log(`Кількість категорій: ${categoryItems.length}`);

// Проходимося по кожному елементу li.item
categoryItems.forEach(item => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li");
  
  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryElements.length}`);
});