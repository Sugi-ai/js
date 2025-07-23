let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
console.log(num1);
console.log(num2);
let plusBtn = document.getElementById("plusBtn");
plusBtn.addEventListener("click", () => {
  let number1 = num1.value;
  console.log(typeof number1);
  let numberNumber1 = parseInt(number1);
  let numberNumber2 = parseInt(number2);
  console.log(numberNumber1 + numberNumber2);
  document.getElementById("answer").innerText = numberNumber1 + numberNumber2;
});
