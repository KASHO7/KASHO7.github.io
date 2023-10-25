function addToInput(value) {
  document.getElementById("result").value += value;
}

function clearInput() {
  document.getElementById("result").value = "";
}

function calculate() {
  var result = eval(document.getElementById("result").value);
  document.getElementById("result").value = result;
}
