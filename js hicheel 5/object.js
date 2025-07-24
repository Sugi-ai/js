// string
//number
//boolean
//underfined
// null
//object

let grades1 = [100, 70, 50, 450, 70, 65, -20, 13];
let grades2 = [20, 40, 200, 400, -25, 35, 20];

// AVG//
function findAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
let result1 = findAvg(grades1);
let result2 = findAvg(grades2);
console.log(result1);
console.log(result2);

/////find sum//

function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let sumResult1 = findSum(grades1);
let sumResult2 = findSum(grades2);
console.log(sumResult1);
console.log(sumResult2);

// buh iereg toonii sum //

function findPositiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}
let pSumResult = findPositiveSum(grades1);
console.log("Positive Sum = ", pSumResult);

// find min //

function findMinGrade(arr) {
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min - arr[i];
    }
  }
  return min;
}
let minGrade = findMinGrade(grades1);
console.log("minimum grade1", minGrade);


function findArrMin(arr) {
  let 
  
}

