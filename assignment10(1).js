// Define the array of fruits
var fruits = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Access and show elements of the array in an unordered list
var fruitList = document.getElementById("fruit-list");
for (var i = 0; i < fruits.length; i++) {
  var listItem = document.createElement("li");
  listItem.textContent = fruits[i];
  fruitList.appendChild(listItem);
}