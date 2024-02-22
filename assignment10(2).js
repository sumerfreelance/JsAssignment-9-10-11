// Define the array of numbers
var numbers = [1, 2, 3, 4, 5];

// Output the current array
function outputArray() {
  var output = document.getElementById("output");
  output.textContent = "Array: " + numbers.join(", ");
}

// Add an element to the array
function addElement() {
  var num = parseInt(prompt("Enter a number to add:"));
  numbers.push(num);
  outputArray();
}

// Remove an element from the array
function removeElement() {
  var index = parseInt(prompt("Enter the index to remove:"));
  if (index >= 0 && index < numbers.length) {
    numbers.splice(index, 1);
    outputArray();
  } else {
    alert("Invalid index!");
  }
}

// Find the index of an element in the array
function findIndex() {
  var num = parseInt(prompt("Enter a number to find:"));
  var index = numbers.indexOf(num);
  if (index !== -1) {
    alert("Index of " + num + " is " + index);
  } else {
    alert(num + " not found in the array!");
  }
}

// Attach event listeners to the buttons
document.getElementById("add-button").addEventListener("click", addElement);
document.getElementById("remove-button").addEventListener("click", removeElement);
document.getElementById("find-button").addEventListener("click", findIndex);

// Initial output
outputArray();