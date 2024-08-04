// Function to verify login credentials
function verifyLogin() {
    // Get the username and password values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Fetch users from the db.json file
    fetch('https://my-json-server.typicode.com/VijayNarasingam/checking/Login')
      .then(response => response.json())
      .then(users => {
        // Check if the entered credentials match any user
        const user = users.find(user => user.username === username && user.password === password);
  
        if (user) {
            // Set login status in local storage
            localStorage.setItem("isLoggedIn", "true");
            // Redirect to the product add page
            window.location.href = "product.html";
        } else {
          // Display an error message
          errorMessage.textContent = "Invalid username or password.";
          return false; // Prevent form submission
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        errorMessage.textContent = "An error occurred. Please try again later.";
        return false; // Prevent form submission
      });
  
    return false; // Prevent form submission initially to handle async fetch
  }
  
