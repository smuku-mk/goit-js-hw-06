const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
  const itemTitle = item.querySelector("h2");
  const itemElements = item.querySelectorAll("li");
  console.log(`Category: ${itemTitle.textContent}`);
  console.log(`Elements: ${itemElements.length}`);
});
