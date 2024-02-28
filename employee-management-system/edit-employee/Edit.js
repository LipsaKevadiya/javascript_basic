function validateEditForm() {
  let isValid = true;

  // Username validation
  const usernameInput = document.getElementById("username");
  console.log("Username:", usernameInput.value);
  if (!usernameInput.value.trim()) {
    alert("Username cannot be empty");
    isValid = false;
  }

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
    console.log("Username:", usernameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
  }

  const formData = {
    email: document.getElementById("email").value,
    newEmail: document.getElementById("new_email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    //   confirm_password: document.getElementById("confirm-password").value,
  };

  const apiUrl = "http://localhost:3000/updatedata"; // Replace with your API endpoint

  fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data updated successfully:", data);
    })
    .catch((error) => {
      console.error("Error updating data:", error.message);
    });
}
//   const signupButton = document.getElementById("signupButton");

//   signupButton.addEventListener("click", () => {
//     window.location.href = "employeLogin.html";
//   });
