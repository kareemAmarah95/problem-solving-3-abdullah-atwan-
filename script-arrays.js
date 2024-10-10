// Arrays

//  اكتب كود يعمل مصفوفة فيها أسماء 5 أشخاص، واطبع الأسماء دي باستخدام حلقة for.

// ==================================================

//  أضف اسم جديد للمصفوفة في آخرها، وبعدها اطبع المصفوفة كلها.

// ==================================================
function printNames() {}
let friendsArr = [];
function printNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (friendsArr.indexOf(arr[i]) === -1) {
      friendsArr.push(arr[i]);
    } else if (friendsArr.indexOf(arr[i]) === 1) {
      // friendsArr.indexOf(arr[0]).shift()
      //   friendsArr.splice(arr[0], 1); //  احذف أول اسم في المصفوفة، وبعد كده اطبع المصفوفة.
      friendsArr.find((i) => console.log(i.toLowerCase())); //fourth question
      //   console.log(arr[i]);
      //   friendsArr.find(arr[i]){

      //   }
      //   if (friendsArr.indexOf(arr[i])) {
      //     console.log(arr[i]);
      //   }
      console.log(friendsArr);
    }
  }
  return friendsArr;
}

// console.log(printNames(["Mohamed", "OsOs", "Kareem", "Hany", "Shaheen"])); // first problem log try to uncomment to test the solution
// console.log(
//   printNames(["Mohamed", "OsOs", "Kareem", "Hany", "Shaheen", "Monem"]) // second problem log try to uncomment to test the solution
// );
// console.log(printNames(["OsOs", "Kareem", "Hany", "Shaheen", "Monem"])); //third problem log try to uncomment to test the solution

console.log(printNames(["Kareem"])); // fourth question

// console.log(
//   printNames(["Mohamed", "OsOs", "Kareem", "Hany", "Shaheen", "Monem"])
// );

//  احذف أول اسم في المصفوفة، وبعد كده اطبع المصفوفة.

// ==================================================

//  ابحث عن اسم معين في المصفوفة، لو لقيته اطبع "الاسم موجود"، لو مش موجود اطبع "الاسم مش موجود".
