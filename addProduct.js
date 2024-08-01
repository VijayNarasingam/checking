// Function to handle the form submission and add a new product
function addProduct() {
  // Get form values
  const productName = document.getElementById("productName").value;
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;
  const link = document.getElementById("link").value;
  const detail = document.getElementById("detail").value;
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  // Create a product object
  const newProduct = {
    productName,
    category,
    image,
    link,
    detail
  };

  // Send POST request to add the product
  fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct)
  })
  .then(response => {
    if (response.ok) {
      successMessage.textContent = "Product added successfully!";
      errorMessage.textContent = "";
      // Clear form fields
      document.getElementById("add-product-form").reset();
    } else {
      throw new Error('Failed to add product');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    errorMessage.textContent = "An error occurred. Please try again.";
    successMessage.textContent = "";
  });

  // Prevent form submission to allow async handling
  return false;
}

function goBackToIndex() {
  // Redirect to the index page (e.g., index.html)
  window.location.href = "index.html";
}

// Add event listener to the "Back" button
document.getElementById("back-button").addEventListener("click", goBackToIndex);

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}