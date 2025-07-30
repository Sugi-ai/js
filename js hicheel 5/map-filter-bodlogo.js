let students = [
  {
    name: "boldoo",
    age: 17,
    grade: 20,
    balance: 10,
    gender: "male",
  },

  {
    name: "dorjoo",
    age: 20,
    grade: 30,
    balance: 200,
    gender: "male",
  },

  {
    name: "tsetsgee",
    age: 16,
    grade: 45,
    balance: 500,
    gender: "female",
  },

  {
    name: "bataa",
    age: 30,
    grade: 50,
    balance: 900,
    gender: "male",
  },

  {
    name: "purew",
    age: 26,
    grade: 33,
    balance: 120,
    gender: "male",
  },

  {
    name: "nawchaa",
    age: 13,
    grade: 14,
    balance: 211,
    gender: "male",
  },

  {
    name: "suhee",
    age: 17,
    grade: 100,
    balance: 27000,
    gender: "female",
  },

  {
    name: "sogoo",
    age: 19,
    grade: 9,
    balance: 900,
    gender: "male",
  },
  {
    name: "suhee",
    age: 17,
    grade: 100,
    balance: 27000,
    gender: "female",
  },

  {
    name: "sogoo",
    age: 19,
    grade: 9,
    balance: 900,
    gender: "male",
  },
];

// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.

let minGrade1 = (students) => {
  let bagadun = students[0];
  students.filter((student) => {
    if (student.grade < bagadun.grade) {
      bagadun = student;
    }
  });
  return bagadun;
};
console.log("Bodlogo1", minGrade1(students));

// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив(array) болгон ялгаж буцаадаг функц бич.

let minorStudents = (students) => {
  let nasandHureegui = [0];
  students.filter((student) => {
    if (student.age < 18) {
      nasandHureegui.push(student);
    }
  });
  return nasandHureegui;
};
console.log("Bodlogo2", minorStudents(students));

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

let sumGrades = (students) => {
  let total = 0;
  students.forEach((student) => {
    total += student.grade;
  });
  return total;
};
console.log("Bodlogo3", sumGrades(students));


// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").
const findStudentsByName = (students, purew) => {
  let result = [0];
  students.forEach((student) => {
    if (student.name === purew) {
      result.push(student);
    }
  });
  return result;
};
console.log("Bodlogo4", findStudentsByName(students, "purew"));



// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

let sortStudentsByGrade = (students) => {
  return students.sort((a, b) => b.grade - a.grade);
};
console.log("Bodlogo5", sortStudentsByGrade(students));



// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.
let richStudents = (students) => {
  return students
    .filter((student) => student.balance > 10000)
    .map((student) => {
      return {
        name: student.name,
        balance: student.balance,
      };
    });
};
console.log("Bodlogo6", richStudents(students));




// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }
const countStudentsByName = (students) => {
  let nameCount =[0]}
students.filter((student) => {
    if (nameCount[student.name]) {
      nameCount[student.name]++;
    } else {
      nameCount[student.name] = 1;
    }
  });
return nameCount
  console.log("Bodlogo7", countStudentsByName(students));
// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }
