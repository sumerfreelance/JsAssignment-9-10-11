// Define the software company object
var softwareCompany = {
    name: "365 Digital Design Studio.",
    founder: "Syed Umer Shah",
    yearFounded: 2020,
    products: ["Product A", "Product B", "Product C"]
  };
  
  // Access and log some properties
  console.log("Company Name:", softwareCompany.name);
  console.log("Founder:", softwareCompany.founder);
  console.log("Year Founded:", softwareCompany.yearFounded);
  console.log("Products:", softwareCompany.products.join(", "));
  
  // Display some properties in HTML
  var companyInfoDiv = document.getElementById("company-info");
  companyInfoDiv.innerHTML = `
    <h1>${softwareCompany.name}</h1>
    <p>Founder: ${softwareCompany.founder}</p>
    <p>Year Founded: ${softwareCompany.yearFounded}</p>
    <p>Products: ${softwareCompany.products.join(", ")}</p>
  `;  