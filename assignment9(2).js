// Define the car object
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    drive: function() {
      console.log("The " + this.year + " " + this.brand + " " + this.model + " is being driven.");
    }
  };
  
  // Call the drive method on the car object
  car.drive();
  
  // Display some properties in HTML
  var carInfoDiv = document.getElementById("car-info");
  carInfoDiv.innerHTML = `
    <h1>${car.brand} ${car.model}</h1>
    <p>Year: ${car.year}</p>
  `;  