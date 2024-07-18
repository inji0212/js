/*math 내장 객체*/
//Math.min()
var x = 10,
  y = -20;
var z = Math.min(x, y);
//Math.max()
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3

//Math.random()
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

let result3 = Math.random() * (45 - 1) + 1; // 1.000000000 ~ 44.9999999999
console.log(result3);

//Math.round()
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6

let result1 = Math.round(1.1);
console.log(result1); // 1

let result4 = Math.round(1.6);
console.log(result4); // 2

let result5 = Math.round(-1.1);
console.log(result5); // -1

//Math.ceil()
//올림
//Math.abs()
//절대값
//MAth.pow(x,y)
//거듭제곱
let result = Math.pow(2, 3); // 2의 3승 = 8
console.log(result); // 8

let result2 = Math.abs(4, 2); // 4의 2승 = 16
console.log(result2); // 16
