// 1
const num = 1;
const result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

// 2
const a = 1;
const b = 1;
const c = 3;
const first = a > b ? a : b;
const result2 = c > first ? c : first;

const max = a > b ? (a > c ? a : c) : b > c ? b : c;

console.log(max);

// 3
const number = 5;
const result3 = number % 2 === 0 ? "Even" : "Odd";
console.log(result3);

// 4
const isLoggedIn = false;
console.log(isLoggedIn ? "Welcome" : "Please log in");

// 5
const age = 21;
console.log(age >= 18 ? "Adult" : "Minor");
