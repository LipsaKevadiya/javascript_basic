function deleteUser() {
  // Get the email value from the input field with ID "email"
  const userEmail = document.getElementById("email").value;

  // Create the formData object
  const formData = {
    email: userEmail,
  };
  // const apiUrl = "http://localhost:3000/delete";
  // Create the request options
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  // Make the DELETE request
  fetch("http://localhost:3000/delete", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Handle the response data after successful deletion
      console.log("Data deleted successfully:", data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("Error during deletion:", error);
    });
}
