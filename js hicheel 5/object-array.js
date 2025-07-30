// let student = {
//   name: "boldoo",
//   age: 20,
//   grade: 90,
// };

// array of numbers
let grades = [10, 20, 30, 100];
//arrao of names
let names = ["boldoo", "dorjoo", "bataa", "tsetsgee"];
//array of objects
let students = [
  { name: "boldoo", age: 20, grade: 20, balance: 150, gender: "male" },
  { name: "dorjoo", age: 15, grade: 30, balance: 200, gender: "male" },
  { name: "tsetsgee", age: 50, grade: 100, balance: 500, gender: "female" },
  { name: "bataa", age: 30, grade: 50, balance: 900, gender: "male" },
];

function findTopStudent(arr) {
  let topStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    //herwee topStudent grade < arr[i] iin grade ih baiwal topStudent ee solino
    if (topStudent.grade < arr[i].grade) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}

let manaiDuu = findTopStudent(students);
console.log(manaiDuu);

//student object bur deer balance gesen property nemeh
//balance dotor toon utga og
// hamgiin ih balance tai suragchiig oloh functuon bich

function findTopBalanceStudent(arr) {
  let TopBalanceStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (TopBalanceStudent.balance < arr[i].balance) {
      TopBalanceStudent = arr[i];
    }
  }
  return TopBalanceStudent;
}

let manaiAh = findTopBalanceStudent(students);
console.log(manaiAh);

//bodlogo2
//2 utga avdag function findStudentByage(arr.age) gesen function bich
// arr --> dotor array of students baina
//findStudentByAge function age iin utgatai tentsuu nastai neg suragchiig olj butsaana.
// jishee ni : findStudentByAge(student,30) gej duudahad nadaa 30 nastai suragchiig olj ugdug baih

function findStudentByAge(arr, age) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age == age) {
      return arr[i];
    }
  }
  return "Uuchlarai 30nastai suragch oldsongui";
}
let ThirtyYearsStudent = findStudentByAge(students, 30);
console.log("bodlogo2", ThirtyYearsStudent);

//bodlogo 3.
//Buh suragchdgiin dundaj nasiig oldog Function bich

function findAvgAges(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i].age;
  }
  let avg = sum / arr.length;

  return avg;
}
console.log("Bodlogo3", findAvgAges(students));

//nasand hursen suragchiig dundag balanc iig oldog function bich

function findAdultAvg(arr) {
  let sum = 0;
  let adultAgeNumber = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      sum = sum + arr[i].age;
      adultAgeNumber++;
    }
  }
  let adultAvg = sum / adultAgeNumber;

  return adultAvg;
}
console.log("Bodlogo4", findAdultAvg(students));

//suragch objet deer gender gesen property nem, 'male' esvel 'female' gesen utga ug
//eregtei suragchdgiig oldog function bich

function findMaleStudent(arr, gender) {
  let maleStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      maleStudent++;
    }
  }
  return maleStudent;
}
let eregteiSuragch = findMaleStudent(students, "male");
console.log("bodlogo5", eregteiSuragch);

//Bodlogo 6 emegtei suragch niit suragchiin heden huwi baigaag tsootsdog function bich.

function findFemaleStudent(arr) {
  let femaleStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender === "female") {
      femaleStudent++;
      sum = sum/ arr.length. * 100;
    }
  }
  let percent = (femaleStudent / arr.length) * 100;
  return percent;
}
let percentFemaleStudent = findFemaleStudent(students);
console.log("bodlogo6", percentFemaleStudent);


