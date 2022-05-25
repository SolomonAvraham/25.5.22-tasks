// 1. צרו אובייקטים של מנהל עם שדות של שם פרטי,  שם משפחה, גיל ושכר.

var manager = {
  firstName: "Solomon",
  lastName: "Avraham",
  age: 30,
  salary: 25000,
};

// 2. צרו אובייקט של עובד, עם שדות של שם פרטי, שם משפחה,גיל וששכר ותנו להם ערך.

var worker = {
  firstName: "Solomon",
  lastName: "Avraham",
  age: 30,
  salary: 25000,
};
// 3. צרו אובייקט של פרי , עם שדות של שם,צבע וסוג ותנו לו להם ערכים.

var fruit = {
  fruitName: "Banana",
  fruitColor: "Yellow",
  fruitType: "Berries",
};

// 4.  הדפיסו למסך את שם הפרי.

document.writeln(fruit.fruitName);

// 5. הדפיסו למסך את צבע הפר.

document.writeln(fruit.fruitColor);

// 6. הדפיסו למסך את סוג הפר.
document.writeln(fruit.fruitType);

// 7.

// 8/

// 9. צרו אובייקט של גן ילדים , עם שדות של שם גננת,
//  מספר הילדים ושמות הילדים, תנו ערכים הגיוניים, מספר הילדים הוא מערך של 10 שמות.

var kindergarten = {
  kindergartenTeacherName: "Mrs. Mazel",
  numberOfChildren: 10,
  nameOfChildren: [
    "moni",
    "lony",
    "doni",
    "toni",
    "coni",
    "bloni",
    "maloni",
    "koni",
    "sloni",
    "yaroni",
  ],
};
console.log(kindergarten.nameOfChildren);

//10. הדפיסו למסך את שמות הילדים, בהדפסות שונות(השתמשו בשיטת הסוגריים המרובעים).

// for (var i = 0; i < kindergarte["nameOfChildren"].length; i++){
//     documents.writeln(kindergarten["numberOfChildren"][i]);
// }

// 11. קלטו מהמשתמש key,
//  והדפיסו את הערך למסך שלום.

// 12.צרו אובייקט של הכיתה , בעזרת קלטים מהמשתמש צרו שדות של מספר הכיתה,
//  מספר התלמידים וגיל והדפיסו את האובייקט ללוג.

// var
// var StudientsClass = {};

// var numOfStudients = +prompt("Enter a number:");

// 13.צרו אובייקט של מורה, בעזרת קלט צרו שדה של השם ותנו ערך מהמשתמש.

// var teacher = {};

// var teacherNameKey = prompt("Enter Teacher's Name(Key):");
// var teacherNameValue = prompt("Enter Teacher's Value:");

// teacher[teacherNameKey] = teacherNameValue;

// console.log(teacher);

// 14. צרו אובייקט של מנהל, בעזרת קלטים צרו שדות של שם פרטי,
// שם משפחה, גיל ושכר ותנו להם ערכים מהמשתמש.

var manager = {};

// for (var i = 0; i < 4; i++) {
//     var myKey = prompt("Enter Key:");
//     var myValue = prompt("Enter Value");
//     manager[myKey] = myValue;
// }

// console.log(manager);

// 15. צרו אובייקט של משתמש,
//     בעזרת קלטים צרו שדות של שם פרטי, שם משפחה, איימיל וסיסמא ותנו להם ערכים
//     מהמשתמש, הדפיסו את האובייקט למסך, כול ערך בדיב משלו.

// var user = {};
// for (var i = 0; i < 4; i++) {
//   var myKey = prompt("Enter Key:");
//   var myValue = prompt("Enter Value");
//   user[myKey] = myValue + (<br>);
// }
// document.writeln([user]);
// console.log([user]);

// לא פתור!

// 16. צרו 4 אובייקטים של רכב, צרו שדות של חברה, צבע, סמ״ק,
//  ושנתון ותנו להם ערכים מהמשתמש, הדפיסו כול אובייקט למסך, כול אובייקט בדיב שלו.

// function creatFourObject() {
//     var carsArray = [];
//     for (var i = 0; i < 4; i++) {
//       var car = {};
//       car.company = prompt("Enter Company Name:");
//       car.color = prompt("Enter Color:");
//       car.year = prompt("Enter Year:");
//       car.cc = prompt("Enter Cubic metre");
//       carsArray.push(car);
//       document.write(
//         "<div>" +
//           " " +
//           car.company +
//           " " +
//           car.color +
//           " " +
//           car.year +
//           " " +
//           car.cc +
//           " " +
//           "</div>"
//       );
//     }

//     console.log(carsArray);
// }

// creatFourObject();

// 17. צרו פונקציה שיוצרת 3 אובייקטים של חתול, לכול חתול יש שם, שנת לידה, סוג ומשקל.
// תנו להם ערכים מהמשתמש, הדפיסו כול אובייקט למסך, כול אובייקט בh1.

function catObjects() {
  for (var i = 0; i < 3; i++) {
    var cat = {};
    cat.name = prompt("Cat Name:");
    cat.birthDate = prompt("BirthDate:");
    cat.type = prompt("Type:");
    cat.weight = prompt("Weight:");
    document.write(
      "<h1>" +
        " " +
        cat.name +
        " " +
        cat.birthDate +
        " " +
        cat.type +
        " " +
        cat.weight +
        " " +
        "</h1>"
    );
  }
}

// catObjects();

// 18.צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים.על פי הקלט,
//     של כלב, לכול כלב יש שם,גיל, סוג ושם בעלים, 
// הדפיסו כול אובייקט למסך,
//  כול אובייקט כ - p משלו.


function dogObject() {
    

    var numOfObjects = prompt("Object Numbers:");

    for (var i = 0; i < numOfObjects; i++){
        var dog = {};
        dog.name = prompt("Dog's Name:");
        dog.age = prompt("Age's Name:");
        dog.type = prompt("Type's Name:");
        dog.owners = prompt("Owner's Name:");
        document.write("<p>" + " " + dog.name + " " + dog.age + " " + dog.type + " " + dog.owners + "</p>");

    }

}

// dogObject();


19. 