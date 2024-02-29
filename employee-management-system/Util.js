export function validateForm(username, email, password, confirmPassword) {
  let isValid = true;

  // Username validation
  console.log("Username::::::::::::::::::", username);
  if (!username.trim()) {
    alert("Username cannot be empty");
    isValid = false;
  }

  // Email validation
  console.log("Email:::::::::::::::::", email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim()) || !email.includes(".com")) {
    alert("Enter a valid email address with '.com'");
    isValid = false;
  }

  // Password validation
  console.log("Password::::::::::::::::", password);
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    isValid = false;
  }

  // Confirm Password validation
  console.log("Confirm Password:::::::::::::::::::", confirmPassword);
  if (confirmPassword !== password) {
    alert("Passwords do not match");
    isValid = false;
  }

  return isValid;
}
