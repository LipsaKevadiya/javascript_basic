import { validateForm } from "../Util.js";

async function validateAddForm() {
  try {
    let isValid = true;

    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const confirmPasswordInput =
      document.getElementById("confirm-password").value;

    // Used imported validation function
    isValid = validateForm(
      usernameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput
    );

    if (isValid) {
      // Log form data in the console
      console.log("Form submitted successfully!");
      console.log("Username:::::::::::", usernameInput);
      console.log("Email::::::::::::", emailInput);
      console.log("Password:::::::::::", passwordInput);
      console.log("Confirm Password:::::::::::", confirmPasswordInput);

      const formData = {
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
        confirm_password: confirmPasswordInput,
      };

      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    }
  } catch (error) {
    console.error("Error during fetch:", error);

    alert("An error occurred while processing the request.");
  }
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.getElementById("signupButton");
  signupButton.addEventListener("click", () => {
    validateAddForm();
  });
});
