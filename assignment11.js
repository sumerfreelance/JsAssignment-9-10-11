// URL of the API to fetch data from
var apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(posts => {
    // Create an unordered list element to render the data
    var ul = document.createElement("ul");
    ul.className = "post-list";

    // Iterate over each post and create a list item element
    posts.forEach(post => {
      var li = document.createElement("li");
      li.textContent = post.title;
      ul.appendChild(li);
    });

    // Render the unordered list on the webpage
    var output = document.getElementById("output");
    output.appendChild(ul);
  })
  .catch(error => console.error("Error fetching data:", error));