// script/arrays.js

document.addEventListener("DOMContentLoaded", function () {
  let persons = [];
  let salaries = [];

  // Initialize dropdown menu with hardcoded values
  let employeeSelect = document.getElementById("employeeSelect");
  employeeSelect.innerHTML = `
      <option value="John">John</option>
      <option value="Jane">Jane</option>
      <option value="Doe">Doe</option>
    `;

  // Move cursor to the name field on application start
  employeeSelect.focus();

  function addSalary() {
    let selectedEmployee = employeeSelect.value;
    let salaryValue = prompt(`Enter salary for ${selectedEmployee}:`);

    // Data validation
    if (
      selectedEmployee.trim() === "" ||
      isNaN(salaryValue) ||
      salaryValue.trim() === ""
    ) {
      alert("Invalid input. Please enter a valid name and numeric salary.");
      return;
    }

    persons.push(selectedEmployee);
    salaries.push(parseFloat(salaryValue));

    // Move cursor to the name field after adding salary
    employeeSelect.focus();
  }

  function displayResults() {
    let averageSalary =
      salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;
    let highestSalary = Math.max(...salaries);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h2>Results</h2>
                              <p>Average Salary: ${averageSalary.toFixed(2)}</p>
                              <p>Highest Salary: ${highestSalary.toFixed(
                                2
                              )}</p>`;
  }

  function displaySalary() {
    let table = document.getElementById("results_table");
    // Clear existing rows
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for (let i = 0; i < persons.length; i++) {
      let row = table.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);

      cell1.innerHTML = persons[i];
      cell2.innerHTML = salaries[i].toFixed(2);
    }
  }

  // Attach functions to buttons
  let addSalaryButton = document.getElementById("addSalaryButton");
  addSalaryButton.addEventListener("click", addSalary);

  let displayResultsButton = document.getElementById("displayResultsButton");
  displayResultsButton.addEventListener("click", displayResults);

  let displaySalaryButton = document.getElementById("displaySalaryButton");
  displaySalaryButton.addEventListener("click", displaySalary);
});
