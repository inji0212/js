//01
const score = 76;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");

if (100 >= score >= 90) console.log("A"); // 불가능
if (100 >= score && score >= 90) console.log("A"); // 가능

//02
const num = 272;
if (num % 2 === 0) console.log("Even");
else console.log("Odd");

//03
const isLoggedIn = true;
const isAdmin = false;
if (!isLoggedIn) console.log("Please log in");
else if (isLoggedIn && !isAdmin) console.log("Access denied");
else console.log("Welcome, admin!");

//04
const a = 3;
const b = 12;
if (a > b) console.log("a is greater");
else if (a < b) console.log("b is greater");
else console.log("a and b are equal");

//05
const month = 7;

if (month === 12 || month === 1 || month === 2) console.log("winter");
else if (month === 3 || month === 4 || month === 5) console.log("spring");
else if (month === 6 || month === 7 || month === 8) console.log("summer");
else console.log("fall");

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("spring");
    breakl;
  case 6:
  case 7:
  case 8:
    console.log("summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("fall");
    break;
}
