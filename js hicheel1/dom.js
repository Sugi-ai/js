let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let minusbutton = document.getElementById("minus");

minusbutton.addEventListener("click", () => {
  console.log(parseInt(num1.value) - parseInt(num2.value));
});

let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let plusbutton = document.getElementById("plus");

plusbutton.addEventListener("click", () => {
  console.log(parseInt(num3.value) + parseInt(num4.value));
});

let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let multiplybutton = document.getElementById("multiply");

multiplybutton.addEventListener("click", () => {
  console.log(parseInt(num5.value) * parseInt(num6.value));
});

let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let dividebutton = document.getElementById("divide");

dividebutton.addEventListener("click", () => {
  console.log(parseInt(num7.value) / parseInt(num8.value));
});
