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

        // middle  //

let number1Input = document.getElementById("num1-input");
let number2Input = document.getElementById("num2-input");
let number3Input = document.getElementById("num3-input");
let middlebutton = document.getElementById("middle");

middlebutton.addEventListener("click", () => {
  let num1 = parseInt(number1Input.value);
  let num2 = parseInt(number2Input.value);
  let num3 = parseInt(number3Input.value);

//     let middle;

//     if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
//         consol.log(num1);
//     } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
//         consol.log(num2);
//     } else {
//         consol.log(num3);
//     }
//         console.log (middle);
// });

 if (num1 > num2) {
        if (num3 < num2) {
            console.log(num2);
        } else {
            console.log(num3);
        }
        
    } else {
        if (num2 < num3) {
            console.log(num2);
        } else {
            console.log (num3);
        }
    }
});
