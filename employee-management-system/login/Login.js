function validateLoginForm() {
  console.log("hiii");
  let isValid = true;

  // Email validation
  const emailInput = document.getElementById("email");
  console.log("Email:", emailInput.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !emailRegex.test(emailInput.value.trim()) ||
    !emailInput.value.includes(".com")
  ) {
    alert("Enter a valid email address with '.com'");
    isValid = false;
  }

  // Password validation
  const passwordInput = document.getElementById("password");
  console.log("Password:", passwordInput.value);
  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters long");
    isValid = false;
  }

  if (isValid) {
    // Log form data in the console
    console.log("Form submitted successfully!");

    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
  }
  const apiUrl = "http://localhost:3000/login"; // Replace with your API endpoint

  const formData = {
    // username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    // confirm_password: document.getElementById("confirm-password").value,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // You may need to include additional headers like authentication tokens
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    // .then((data) => {
    //   // Handle the successful response
    //   console.log("successfully added", data);
    // })

    .then((data) => {
      // Handle the successful response
      if (data.success) {
        alert("Login successful!");
        // Redirect or perform other actions for a successful login
      } else {
        alert("Invalid credentials. Please try again.");
      }
    })

    .catch((error) => {
      // Handle errors during the fetch request
      console.error("Fetch error:", error);
      alert("An error occurred. Please try again later.");
    });
}

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
  // Redirect to the login page
  window.location.href = "../list-employee/List.html";
});
