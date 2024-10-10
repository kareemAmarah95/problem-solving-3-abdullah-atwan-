// امتحان 2: الشروط (Conditions)

// 1. اكتب دالة بتاخد درجة (رقم)، وتطبع إذا كانت الدرجة:
//    - "ممتاز" لو أكبر من أو يساوي 90.
//    - "جيد جدًا" لو بين 80 و89.
//    - "جيد" لو بين 70 و79.
//    - "مقبول" لو بين 60 و69.
//    - "راسب" لو أقل من 60.
function score() {}

// function score(mark) {
//   if (mark >= 90) {
//     console.log(`Excellent`);
//   } else if (mark >= 80 && mark >= 89) {
//     console.log(`Very Good`);
//   } else if (mark >= 70 && mark >= 79) {
//     console.log(`Good`);
//   } else if (mark >= 60 && mark >= 69) {
//     console.log(`acceptable`);
//   } else {
//     console.log(`failed`);
//   }
// }

// console.log(score(60)); //conditions first questions
// =========================================================

// function checkEven(num) {
//   return num % 2 === 0 ? `Even Number` : `Odd Number`;
// }

// console.log(checkEven(2));

// =========================================================
// امتحان 3: الحلقات (Loops)
// 1. اكتب كود يعد من 1 لـ 100 ويطبع الأرقام الزوجية بس.

// function getEvenFromZeroToOneHundred(num) {
//   for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//       return `Even Number`;
//     } else {
//       return `Odd Number`;
//     }
//   }
// }

// console.log(getEvenFromZeroToOneHundred(2));

// 2. اعمل مصفوفة بأسماء 3 أصدقاء، واستخدم حلقة while عشان تطبع كل اسم في المصفوفة.
// const friends = ["Ahmed", "Kareem", "Medo"];
// while (friends < 3) {
//   friends++;
// }
// console.log(friends);
// ================================================================================
// 3. اكتب كود يستخدم حلقة for عشان يطبع الأرقام من 10 لـ 1 تنازليًا.
// function descending() {}
// let currVal;
// function descending(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr.sort(function (a, b) {
//       return b - a; // من الكبير للصغير
//       // return a - b; // من الصغير للكبير
//     });
//   }
//   return arr;
// }

// console.log(descending([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// ========================================================================================
// امتحان 4: الدوال (Functions)
// 1. اعمل دالة بتاخد اسم الشخص وتطبع رسالة "أهلًا، يا [الاسم]!".

// function welcomeName(name) {
//   return prompt(`Hello ${name}`);
// }

// console.log(`Hello ${welcomeName(name)} , welcome to your second home`);

// =============================================================================================

// 2. اكتب دالة بتحسب مجموع 3 أرقام وبتطبع النتيجة.

// function sumOfThreeNumbers(sum) {
//   total = 0;
//   for (let i = 0; i < sum.length; i++) {
//     total += sum[i];
//   }
//   return total;
// }

// console.log(sumOfThreeNumbers([1, 2, 3]));

// =============================================================================================

// 3. اكتب دالة بتاخد مصفوفة من الأرقام، وترجع أكبر رقم فيها.
// function getMax() {}
// function getMax(numsArr) {
//   max = 0;
//   for (let i = 0; i < numsArr.length; i++) {
//     currVal = numsArr[i];
//     if (currVal > max) max = currVal;
//   }
//   return max;
// }

// console.log(getMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// ================================================================================================
// امتحان 5: الكائنات (Objects)
// 1. اعمل كائن (object) فيه معلومات عن كتاب (الاسم، المؤلف، عدد الصفحات)، واطبع كل خاصية في الكائن.

// const Book = {
//   name: "E = Mc ** 2",
//   author: "Albert Einstein",
//   pages: 365,
// };
// console.log(Object.entries(Book));

// console.log(`Car [${Car.Brand}] , Model [${Car.Model}], Date [${Car.Date}]`);

// console.log(
//   `Book [${Book.name}] , author [${Book.author}], pages [${Book.pages}]`
// );

// ================================================================================================

// 2. اكتب دالة بتاخد كائن بيمثل سيارة (الماركة، الموديل، السنة) وتطبع جملة بتقول "العربية [الماركة] موديل [الموديل] إصدار سنة [السنة]".

// const Car = {
//   Brand: "Mercedes",
//   Model: `E-200`,
//   Date: `2010`,
// };

// console.log(Object.entries(Car));

// console.log(`Car [${Car.Brand}] , Model [${Car.Model}], Date [${Car.Date}]`);

// ================================================================================================

// 3. اعمل مصفوفة من الكائنات اللي كل كائن يمثل شخص (الاسم، السن، الوظيفة)، وبعدها اطبع كل اسم ووظيفة لكل شخص.
// function getPersonDetails() {}
// const People = [
//   { name: `Ehab`, age: 56, job: `Doctor` },
//   { name: `Kareem`, age: 29, job: `Programmer` },
//   { name: `Hany`, age: 28, job: `Cyber Security` },
// ];

// console.log(
//   `Hi my name is ${People[0].name} , I am ${People[0].age} years old , and i work as a ${People[0].job}`
// );
// console.log(
//   `Hi my name is ${People[1].name} , I am ${People[1].age} years old , and i work as a ${People[1].job}`
// );
// console.log(
//   `Hi my name is ${People[2].name} , I am ${People[2].age} years old , and i work as a ${People[2].job}`
// );

// ================================================================================================
// امتحان 6: المصفوفات والدوال معًا
// 1. اكتب دالة بتاخد مصفوفة من الأرقام وبتحسب المتوسط الحسابي للأرقام دي.

// const arr = [];
// function getAvg(arr) {
//   let total = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = (sum += arr[i]) / arr.length;
//   }
//   return total;
// }

// console.log(getAvg([1, 2, 3, 4, 5, 6]));

// ================================================================================================
// 2. اعمل دالة بتاخد مصفوفة فيها درجات الطلاب (من 0 لـ 100) وتطبع "ناجح" لو الدرجة أكبر من أو تساوي 50، و"راسب" لو أقل من 50.

// let deg = 0;
// const arr = [];
// function getSuccess(deg) {
//   for (let i = 1; i <= 100; i++) {
//     if (i >= 50) {
//       console.log(`${i} => Success ناجح`);
//     } else {
//       console.log(`${i} => Failure فاشل`);
//     }
//   }
// }
// console.log(getSuccess());

// ================================================================================================
// امتحان 7: الجمع بين المفاهيم

// 1. اكتب كود يعمل مصفوفة تحتوي على أرقام عشوائية، ويحسب مجموع الأرقام الزوجية اللي فيها.

// const randomArr = Math.floor(Math.random() * 100);
// console.log(randomArr);

// function getEvenFormRandomArr(arr) {}
// function getEvenFormRandomArr(arr) {
//   arr.push(randomArr);
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(getEvenFormRandomArr([1, 2, 3, 4, 5, 6, 7]));

// ================================================================================================
// 2. اكتب دالة بتاخد مصفوفة من الكلمات، وترجع أطول كلمة في المصفوفة.

// function getLongestWordLength() {}
// function getLongestWordLength(arr) {
//   let word = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (word.length < arr[i].length) {
//       word = arr[i];
//     }
//   }
//   return word;
// }

// console.log(getLongestWordLength(["kareem", "hany"]));

// =================================================================================================
// 3. اكتب برنامج يحسب درجات 5 مواد لطالب، ويطبع هل الطالب ناجح في كل مادة بناءً على إنه جاب أكتر من 50% في كل مادة.

// function calcGrade(totalScore) {}
// function calcGrade(totalScore) {
//   sum = 0;
//   for (let i = 0; i < totalScore.length; i++) {
//     console.log(totalScore[i]);
//     sum += totalScore[i];
//     if (totalScore[i] >= 50) {
//       console.log(`the student passed the exam`);
//     } else {
//       console.log(`the student failed the exam`);
//     }
//   }
//   return sum;
// }

// console.log(calcGrade([99, 40, 100, 50, 85]));

// =================================================================================================

// التحدي النهائي (امتحان شامل):

// عايزك تكتب برنامج كامل يدير درجات مجموعة طلاب. البرنامج هيعمل الآتي:
// 1. يضيف طالب جديد باسمه ودرجاته في 5 مواد.
// 2. يعدل درجة مادة معينة لأي طالب.
// 3. يحذف طالب من النظام.
// 4. يعرض كل درجات الطلاب.
// 5. يعرض المتوسط الحسابي لدرجات كل طالب.
// 6. يحدد مين الطالب اللي جاب أعلى درجة.
// we want to find score
function getScore() {}
function editScore() {}
// function getScore(arrOfNewStudents) {
//   for (let i = 0; i < arrOfNewStudents.length; i++) {
//     const element = arrOfNewStudents[i];
//     // console.log(element);
//     console.log(
//       `${element.name} score in physics = ${element.physics} , english = ${element.english}, mathematics = ${element.mathematics} , calculas = ${element.calculas} & in arabic score = ${element.arabic}`
//     );

//     // console.log(element);

//   }
// }

// console.log(
//   getScore([
//     {
//       name: "Ahmed",
//       physics: 85,
//       english: 90,
//       mathematics: 95,
//       calculas: 100,
//       arabic: 80,
//     },
//     {
//       name: "Kareem",
//       physics: 100,
//       english: 100,
//       mathematics: 100,
//       calculas: 100,
//       arabic: 100,
//     },
//     {
//       name: "Sayed",
//       physics: 10,
//       english: 20,
//       mathematics: 50,
//       calculas: 100,
//       arabic: 60,
//     },
//     {
//       name: "Ehab",
//       physics: 90,
//       english: 90,
//       mathematics: 100,
//       calculas: 100,
//       arabic: 85,
//     },
//     {
//       name: "Hany",
//       physics: 50,
//       english: 50,
//       mathematics: 50,
//       calculas: 70,
//       arabic: 80,
//     },
//   ])
// );

// function editGradePermission(arrOfNewStudents, editVal) {
//   value = 0;
//   for (let i = 0; i < arrOfNewStudents.length; i++) {
//     value = Object.entries(arrOfNewStudents[i])[1][1] = editVal;
//     console.log((Object.entries(arrOfNewStudents[i])[1][1] = value));
//   }
//   return value;
// }

// console.log(
//   editGradePermission(
//     [
//       {
//         name: "Ahmed",
//         physics: 85,
//         english: 90,
//         mathematics: 95,
//         calculas: 100,
//         arabic: 80,
//       },
//       {
//         name: "Kareem",
//         physics: 100,
//         english: 100,
//         mathematics: 100,
//         calculas: 100,
//         arabic: 100,
//       },
//     ],
//     100
//   )
// );

// =============================================================================

// function deleteStudentFromSystem() {}
// function deleteStudentFromSystem(arrOfNewStudents, id) {
//   return arrOfNewStudents.filter((element) => element.id !== id);
//   console.log(arrOfNewStudents);
// }

// console.log(
//   deleteStudentFromSystem(
//     [
//       {
//         id: 1,
//         name: "Ahmed",
//         physics: 85,
//         english: 90,
//         mathematics: 95,
//         calculas: 100,
//         arabic: 80,
//       },
//       {
//         id: 2,
//         name: "Kareem",
//         physics: 100,
//         english: 100,
//         mathematics: 100,
//         calculas: 100,
//         arabic: 100,
//       },
//       {
//         id: 3,
//         name: "Sayed",
//         physics: 10,
//         english: 20,
//         mathematics: 50,
//         calculas: 100,
//         arabic: 60,
//       },
//       {
//         id: 4,
//         name: "Ehab",
//         physics: 90,
//         english: 90,
//         mathematics: 100,
//         calculas: 100,
//         arabic: 85,
//       },
//       {
//         id: 5,
//         name: "Hany",
//         physics: 50,
//         english: 50,
//         mathematics: 50,
//         calculas: 70,
//         arabic: 80,
//       },
//     ],
//     2
//   )
// );

// function displayGradesAndStudents() {}
// function displayGradesAndStudents(arrOfNewStudents) {
//   for (let i = 0; i < arrOfNewStudents.length; i++) {
//     console.log(
//       `Hi my name is ${arrOfNewStudents[i]["name"]} , and these are my grades physics = ${arrOfNewStudents[i]["physics"]} , english = ${arrOfNewStudents[i]["english"]} , mathematics = ${arrOfNewStudents[i]["mathematics"]} , calculas = ${arrOfNewStudents[i]["calculas"]} , arabic = ${arrOfNewStudents[i]["arabic"]}`
//     );
//   }
// }

// console.log(
//   displayGradesAndStudents([
//     {
//       id: 1,
//       name: "Ahmed",
//       physics: 85,
//       english: 90,
//       mathematics: 95,
//       calculas: 100,
//       arabic: 80,
//     },
//     {
//       id: 2,
//       name: "Kareem",
//       physics: 100,
//       english: 100,
//       mathematics: 100,
//       calculas: 100,
//       arabic: 100,
//     },
//     {
//       id: 3,
//       name: "Sayed",
//       physics: 10,
//       english: 20,
//       mathematics: 50,
//       calculas: 100,
//       arabic: 60,
//     },
//     {
//       id: 4,
//       name: "Ehab",
//       physics: 90,
//       english: 90,
//       mathematics: 100,
//       calculas: 100,
//       arabic: 85,
//     },
//     {
//       id: 5,
//       name: "Hany",
//       physics: 50,
//       english: 50,
//       mathematics: 50,
//       calculas: 70,
//       arabic: 80,
//     },
//   ])
// );

// ============================================================================

// function calcAvg() {}
// function calcAvg(arrOfNewStudents) {
//   let totalGrades = 0;
//   let ahmedTotalGrades = 0;
//   let ahmedAvgTotalGrades = 0;
//   let kareemTotalGrades = 0;
//   let kareemAvgTotalGrades = 0;
//   let sayedTotalGrades = 0;
//   let sayedAvgTotalGrades = 0;
//   let hanyTotalGrades = 0;
//   let hanyAvgTotalGrades = 0;
//   let newArr = [];
//   let newArr2 = [];
//   let newArr3 = [];
//   let newArr4 = [];
//   let newArr5 = [];
//   for (let i = 0; i < arrOfNewStudents.length; i++) {
//     console.log(arrOfNewStudents);
//     // ahmed score
//     ahmedTotalGrades =
//       arrOfNewStudents[0]["physics"] +
//       arrOfNewStudents[0]["english"] +
//       arrOfNewStudents[0]["mathematics"] +
//       arrOfNewStudents[0]["arabic"] +
//       arrOfNewStudents[0]["calculas"];
//     newArr.push(ahmedTotalGrades);
//     for (let j = 0; j < newArr.length; j++) {
//       ahmedAvgTotalGrades = ahmedTotalGrades / newArr.length;
//     }
//     //sayed score
//     sayedTotalGrades =
//       arrOfNewStudents[0]["physics"] +
//       arrOfNewStudents[0]["english"] +
//       arrOfNewStudents[0]["mathematics"] +
//       arrOfNewStudents[0]["arabic"] +
//       arrOfNewStudents[0]["calculas"];
//     newArr3.push(ahmedTotalGrades);
//     for (let j = 0; j < newArr.length; j++) {
//       sayedAvgTotalGrades = sayedTotalGrades / newArr.length;
//     }
//     // kareem score
//     kareemTotalGrades =
//       arrOfNewStudents[1]["physics"] +
//       arrOfNewStudents[1]["english"] +
//       arrOfNewStudents[1]["mathematics"] +
//       arrOfNewStudents[1]["arabic"] +
//       arrOfNewStudents[1]["calculas"];
//     newArr2.push(kareemTotalGrades);
//     for (let j = 0; j < newArr2.length; j++) {
//       kareemAvgTotalGrades = kareemTotalGrades / newArr2.length;
//     }
//     // sayed score
//     sayedTotalGrades =
//       arrOfNewStudents[2]["physics"] +
//       arrOfNewStudents[2]["english"] +
//       arrOfNewStudents[2]["mathematics"] +
//       arrOfNewStudents[2]["arabic"] +
//       arrOfNewStudents[2]["calculas"];
//     newArr3.push(kareemTotalGrades);
//     for (let j = 0; j < newArr3.length; j++) {
//       sayedAvgTotalGrades = sayedTotalGrades / newArr3.length;
//     }
//     // ehab score
//     ehabTotalGrades =
//       arrOfNewStudents[3]["physics"] +
//       arrOfNewStudents[3]["english"] +
//       arrOfNewStudents[3]["mathematics"] +
//       arrOfNewStudents[3]["arabic"] +
//       arrOfNewStudents[3]["calculas"];
//     newArr4.push(kareemTotalGrades);
//     for (let j = 0; j < newArr4.length; j++) {
//       ehabAvgTotalGrades = ehabTotalGrades / newArr4.length;
//     }
//     // hany score
//     hanyTotalGrades =
//       arrOfNewStudents[4]["physics"] +
//       arrOfNewStudents[4]["english"] +
//       arrOfNewStudents[4]["mathematics"] +
//       arrOfNewStudents[4]["arabic"] +
//       arrOfNewStudents[4]["calculas"];
//     newArr5.push(kareemTotalGrades);
//     for (let j = 0; j < newArr5.length; j++) {
//       hanyAvgTotalGrades = hanyTotalGrades / newArr5.length;
//     }
//   }
//   // console.log(ahmedTotalGrades);
//   // console.log(ahmedAvgTotalGrades); //90
//   // console.log(kareemAvgTotalGrades); //100
//   // console.log(sayedAvgTotalGrades); //24
//   // console.log(ehabAvgTotalGrades); // 93
//   // console.log(hanyAvgTotalGrades); // 60
//   // ahmedAvgTotalGrades = ahmedTotalGrades

//   return [
//     { "ahmed-average-score": ahmedAvgTotalGrades },
//     { "kareem-average-score": kareemAvgTotalGrades },
//     { "sayed-average-score": sayedAvgTotalGrades },
//     { "ehab-average-score": ehabAvgTotalGrades },
//     { "hany-average-score": hanyAvgTotalGrades },
//   ];
// }

// console.log(
//   calcAvg([
//     {
//       id: 1,
//       name: "Ahmed",
//       physics: 85,
//       english: 90,
//       mathematics: 95,
//       calculas: 100,
//       arabic: 80,
//     },
//     {
//       id: 2,
//       name: "Kareem",
//       physics: 100,
//       english: 100,
//       mathematics: 100,
//       calculas: 100,
//       arabic: 100,
//     },
//     {
//       id: 3,
//       name: "Sayed",
//       physics: 10,
//       english: 20,
//       mathematics: 50,
//       calculas: 100,
//       arabic: 60,
//     },
//     {
//       id: 4,
//       name: "Ehab",
//       physics: 90,
//       english: 90,
//       mathematics: 100,
//       calculas: 100,
//       arabic: 85,
//     },
//     {
//       id: 5,
//       name: "Hany",
//       physics: 50,
//       english: 50,
//       mathematics: 50,
//       calculas: 70,
//       arabic: 80,
//     },
//   ])
// );

// ====================================================================================================================================================================================================================================

function getMaxScore(arrOfNewStudents) {
  let scoresArr = [];
  let maxScore = 0;
  for (let i = 0; i < arrOfNewStudents.length; i++) {
    //ahmed score
    ahmedScore =
      arrOfNewStudents[0].arabic +
      arrOfNewStudents[0].calculas +
      arrOfNewStudents[0].english +
      arrOfNewStudents[0].mathematics +
      arrOfNewStudents[0].physics;
    //kareem score
    kareemScore =
      arrOfNewStudents[1].arabic +
      arrOfNewStudents[1].calculas +
      arrOfNewStudents[1].english +
      arrOfNewStudents[1].mathematics +
      arrOfNewStudents[1].physics;
    //sayed score
    sayedScore =
      arrOfNewStudents[2].arabic +
      arrOfNewStudents[2].calculas +
      arrOfNewStudents[2].english +
      arrOfNewStudents[2].mathematics +
      arrOfNewStudents[2].physics;
    //ehab score
    ehabScore =
      arrOfNewStudents[3].arabic +
      arrOfNewStudents[3].calculas +
      arrOfNewStudents[3].english +
      arrOfNewStudents[3].mathematics +
      arrOfNewStudents[3].physics;
    //ehab score
    hanyScore =
      arrOfNewStudents[4].arabic +
      arrOfNewStudents[4].calculas +
      arrOfNewStudents[4].english +
      arrOfNewStudents[4].mathematics +
      arrOfNewStudents[4].physics;
  }
  scoresArr.push(ahmedScore, kareemScore, sayedScore, ehabScore, hanyScore);
  for (let i = 0; i < scoresArr.length; i++) {
    maxScore = Math.max(...scoresArr);
  }

  // console.log(ahmedScore, kareemScore, sayedScore, ehabScore, hanyScore);
  return maxScore;
}
console.log(
  getMaxScore([
    {
      id: 1,
      name: "Ahmed",
      physics: 85,
      english: 90,
      mathematics: 95,
      calculas: 100,
      arabic: 80,
    },
    {
      id: 2,
      name: "Kareem",
      physics: 100,
      english: 100,
      mathematics: 100,
      calculas: 100,
      arabic: 100,
    },
    {
      id: 3,
      name: "Sayed",
      physics: 10,
      english: 20,
      mathematics: 50,
      calculas: 100,
      arabic: 60,
    },
    {
      id: 4,
      name: "Ehab",
      physics: 90,
      english: 90,
      mathematics: 100,
      calculas: 100,
      arabic: 85,
    },
    {
      id: 5,
      name: "Hany",
      physics: 50,
      english: 50,
      mathematics: 50,
      calculas: 70,
      arabic: 80,
    },
  ])
);
