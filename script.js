const display = document.getElementById("result");
var exp = "";

function addNumber(num) {
  exp += num;
  display.innerHTML = exp;
  //     console.log(num);
  //     console.log(exp);
}

function addOperator(opt) {
  if (exp === "") {
    exp += "0";
  }

  // if last position of exp is operator
  let temp = exp.slice(-1);
  if (temp === "+" || temp === "-" || temp === "*" || temp === "/") {
    if (temp !== opt) {
      //alert("operator is already existing so cannot add opt here.")
      let lastPosition = exp.length - 1;
      exp = exp.substring(0, lastPosition) + opt;
      display.innerHTML = exp;
    }
  } else {
    exp += opt;
    display.innerHTML = exp;
  }
}

function clearDisplay() {
  exp = "";
  display.innerHTML = "0";
}

function calculate() {
  try {
    let result = eval(exp);
    exp = result.toString();
    display.innerHTML = exp;
  } catch (err) {
    exp = "";
    display.innerHTML = err.message;
  }
}
