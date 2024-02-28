import { validateForm } from "../Util.js";

function validateSignUpForm() {
  let isValid = true;

  // Fetch form data
  const usernameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const confirmPasswordInput =
    document.getElementById("confirm-password").value;

  // Use the imported validation function
  isValid = validateForm(
    usernameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput
  );

  if (isValid) {
    // Log form data in the console
    console.log("Form submitted successfully!");
    console.log("Username:", usernameInput);
    console.log("Email:", emailInput);
    console.log("Password:", passwordInput);
    console.log("Confirm Password:", confirmPasswordInput);

    const apiUrl = "http://localhost:3000/signup";

    const formData = {
      username: usernameInput,
      email: emailInput,
      password: passwordInput,
      confirm_password: confirmPasswordInput,
    };

    // Fetch request
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("successfully added", data))
      .catch((error) => console.error("Fetch error:", error));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.getElementById("signupButton");
  signupButton.addEventListener("click", () => {
    validateSignUpForm();

    window.location.href = "../login/Login.html";
  });
});
