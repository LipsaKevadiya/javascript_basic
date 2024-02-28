function addEmployee() {
  window.location.href = "../add-employee/Add.html";
}

function editEmployee() {
  window.location.href = "../edit-employee/Edit.html";
}

function deleteEmployee() {
  window.location.href = "../delete-employee/Delete.html";
}

function logout() {
  // Redirect to login page
  window.location.href = "../login/Login.html";
}

// Fetch employee data from API and show it into table
fetch("http://localhost:3000/signup")
  .then((response) => response.json())
  .then((data) => {
    const employeesContainer = document.getElementById("employeesContainer");
    data.forEach((employee) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td>${employee.username}</td>
                    <td>${employee.email}</td>
                    <td>${employee.newEmail}</td>
                `;
      employeesContainer.appendChild(row);
    });
  });
