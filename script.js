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
  // Using string like array indexing by split("")
  let lIndex = exp.slice(-1); //lIndex = last index
  if (lIndex === "+" || lIndex === "-" || lIndex === "*" || lIndex === "/") {
    if (lIndex !== opt) {
      //alert("operator is already existing so cannot add opt here.")
      let lastPosition = exp.length - 1;
      let strTemp = exp.split(""); // convert to str array
      strTemp[lastPosition] = opt; 
      exp = strTemp.join("") ; // convert back to string
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
