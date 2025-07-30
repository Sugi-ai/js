let students = [
  { 
    name: "boldoo", 
    age: 20, 
    grade: 20, 
    balance: 10, 
    gender: "male" },

  { 
    name: "dorjoo", 
    age: 15, 
    grade: 30, 
    balance: 200, 
    gender: "male" },

  { 
    name: "tsetsgee", 
    age: 50, 
    grade: 45, 
    balance: 500, 
    gender: "female" },

  { 
    name: "bataa", 
    age: 30, 
    grade: 50, 
    balance: 900, 
    gender: "male" },

  { 
    name: "purew", 
    age: 26, 
    grade: 33, 
    balance: 120, 
    gender: "male" },

  { 
    name: "nawchaa", 
    age: 13, 
    grade: 14, 
    balance: 211, 
    gender: "male" },

  { 
    name: "suhee", 
    age: 17, 
    grade: 100, 
    balance: 270, 
    gender: "female" },

  { 
    name: "sogoo", 
    age: 19, 
    grade: 9, 
    balance: 900, 
    gender: "male" },
];


// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.

let minGrade1 = (students) => {
    let bagadun = students[0];
    students.filter((student) => {
        if (student.grade < bagadun.grade) {
            bagadun= student;
        }

    })
    return bagadun;
}
console.log("Bodlogo1",minGrade1(students));


// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив(array) болгон ялгаж буцаадаг функц бич.
 let childStudents
// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }

// let animals = [
//   {
//     leg: 4,
//     name: "dog",
//     height: 10,
//   },
//   {
//     leg: 2,
//     name: "chicken",
//     height: 10,
//   },
//   {
//     leg: 4,
//     name: "cat",
//     height: 123,
//   },
//   {
//     leg: 2,
//     name: "kangroo",
//     height: 145,
//   },
// ];
// // [
// //   { name: 'dog', height: 10 },
// //   { name: 'cat', height: 10 }
// // ]
// const find4LeggedAnimals = (aasd) => {
//   let filteredAnimals = [];
//   let count = 0;
//   for (i = 0; i < aasd.length; i++) {
//     if (aasd[i].leg === 4) {
//       filteredAnimals[count] = {
//         name: aasd[i].name,
//         height: aasd[i].height,
//       };
//       count++;
//     }
//   }
//   return filteredAnimals;
// };

// const filteredAnimals = find4LeggedAnimals(animals);
// console.log(filteredAnimals);