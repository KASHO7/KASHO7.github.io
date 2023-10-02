function displayDateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var meridiem = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  var dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][now.getDay()];
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][now.getMonth()];
  var day = now.getDate();
  var year = now.getFullYear();

  var formattedTime =
    hours + ":" + (minutes < 10 ? "0" : "") + minutes + meridiem;
  var formattedDate =
    "Today is " +
    formattedTime +
    " on " +
    dayOfWeek +
    ", " +
    day +
    " " +
    month +
    ", " +
    year;
  document.getElementById("dateTimeDisplay").innerText = formattedDate;
}

document
  .getElementById("nameMoodButton")
  .addEventListener("click", function () {
    var name = document.getElementById("nameInput").value;
    var mood = document.getElementById("moodInput").value;

    var greeting =
      "VisionarySuthar welcomes you, " +
      name +
      "!\nWe're glad you are doing " +
      mood +
      "!";
    document.getElementById("greeting").innerText = greeting;
  });

document
  .getElementById("findPolygonButton")
  .addEventListener("click", function () {
    var number = Math.abs(
      Math.round(parseFloat(document.getElementById("numberInput").value))
    );

    var polygonName = "";
    switch (number) {
      case 0:
        polygonName = "Monogon";
        break;
      case 1:
        polygonName = "Digon";
        break;
      case 2:
        polygonName = "Trigon";
        break;
      case 3:
        polygonName = "Tetragon";
        break;
      case 4:
        polygonName = "Pentagon";
        break;
      case 5:
        polygonName = "Hexagon";
        break;
      case 6:
        polygonName = "Heptagon";
        break;
      case 7:
        polygonName = "Octagon";
        break;
      case 8:
        polygonName = "Nonagon";
        break;
      case 9:
        polygonName = "Decagon";
        break;
      default:
        polygonName = "Polygon with " + number + " sides";
        break;
    }

    document.getElementById("polygonResult").innerText =
      "Polygon Name: " + polygonName;
  });
function calculateTip() {
  var amount = parseFloat(prompt("Enter the bill amount:"));
  if (!isNaN(amount)) {
    var tip = 0.2 * amount;
    alert(`Tip Amount (20%): $${tip.toFixed(2)}`);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}

function calculateTax() {
  var amount = parseFloat(prompt("Enter the total amount:"));
  var taxRate = parseFloat(
    prompt("Enter the tax rate (in decimal form, e.g., 0.08 for 8%):")
  );
  if (!isNaN(amount) && !isNaN(taxRate) && taxRate >= 0) {
    var tax = taxRate * amount;
    alert(`Tax Amount: $${tax.toFixed(2)}`);
  } else {
    alert("Invalid input. Please enter valid numbers.");
  }
}

function addNumbers() {
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  if (!isNaN(num1) && !isNaN(num2)) {
    var sum = num1 + num2;
    alert(`Sum: ${sum}`);
  } else {
    alert("Invalid input. Please enter valid numbers.");
  }
}

function multiplyNumbers() {
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  if (!isNaN(num1) && !isNaN(num2)) {
    var product = num1 * num2;
    alert(`Product: ${product}`);
  } else {
    alert("Invalid input. Please enter valid numbers.");
  }
}

document
  .getElementById("functionButton1")
  .addEventListener("click", calculateTip);
document
  .getElementById("functionButton2")
  .addEventListener("click", calculateTax);
document
  .getElementById("functionButton3")
  .addEventListener("click", addNumbers);
document
  .getElementById("functionButton4")
  .addEventListener("click", multiplyNumbers);
