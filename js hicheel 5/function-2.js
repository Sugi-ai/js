function findsum(a, b) {
  let sum = a + b;
  return sum;
}

let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let button = document.getElementById("btn");
let asnwerP = document.getElementById("answer");

function bunttonClick() {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let sum = num1 + num2;
  asnwerP.innerText = sum;
}

button.addEventListener("click", bunttonClick);
