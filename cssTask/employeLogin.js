// function validateForm() {
//   console.log("Hyyy");
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;

//   if (username === "" || password === "") {
//     alert("Please enter both username and password");
//     return false;
//   }

//   return true;
// }
// function validateFormm() {
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   var usernameError = document.getElementById("usernameError");
//   var passwordError = document.getElementById("passwordError");

//   usernameError.textContent = "";
//   passwordError.textContent = "";

//   if (username === "") {
//     usernameError.textContent = "Username is required";
//     return false;
//   }

//   if (password === "") {
//     passwordError.textContent = "Password is required";
//     return false;
//   }

//   // Add more complex validation if needed, e.g., checking password length, format, etc.

//   return true;
// }

function validateLoginForm() {
  // console.log("hiii");
  let isValid = true;

  // Email validation
  const emailInput = document.getElementById("email");
  console.log("Email:", emailInput.value);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    alert("Enter a valid email address");
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
}
