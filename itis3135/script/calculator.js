window.onload = function () {
  // Attach event listeners to buttons
  document.getElementById("button7").onclick = function () {
    addToInput("7");
  };
  document.getElementById("button8").onclick = function () {
    addToInput("8");
  };
  document.getElementById("button9").onclick = function () {
    addToInput("9");
  };
  document.getElementById("buttonPlus").onclick = function () {
    addToInput("+");
  };

  document.getElementById("button4").onclick = function () {
    addToInput("4");
  };
  document.getElementById("button5").onclick = function () {
    addToInput("5");
  };
  document.getElementById("button6").onclick = function () {
    addToInput("6");
  };
  document.getElementById("buttonMinus").onclick = function () {
    addToInput("-");
  };

  document.getElementById("button1").onclick = function () {
    addToInput("1");
  };
  document.getElementById("button2").onclick = function () {
    addToInput("2");
  };
  document.getElementById("button3").onclick = function () {
    addToInput("3");
  };
  document.getElementById("buttonMultiply").onclick = function () {
    addToInput("*");
  };

  document.getElementById("buttonClear").onclick = clearInput;
  document.getElementById("button0").onclick = function () {
    addToInput("0");
  };
  document.getElementById("buttonDivide").onclick = function () {
    addToInput("/");
  };
  document.getElementById("buttonEquals").onclick = calculate;
};

function addToInput(value) {
  document.getElementById("result").value += value;
}

function clearInput() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
