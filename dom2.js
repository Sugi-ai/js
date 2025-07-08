let num1Input = document.getElementById("num1-input");
let num2Input = document.getElementById("num2-input");
let num3Input = document.getElementById("num3-input");
let maxbutton = document.getElementById("max");

maxbutton.addEventListener("click", () => {
  let num1 = parseInt(num1Input.value);
  let num2 = parseInt(num2Input.value);
  let num3 = parseInt(num3Input.value);
  

    if (num1 > num2) {
        if (num3 > num1) {
            console.log(num3);
        } else {
            console.log(num1);
        }
        
    } else {
        if (num2 > num3) {
            console.log(num2);
        } else {
            console.log (num3);
        }
    }
});