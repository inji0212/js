/*논리 연산자*/

//expr1 && expr2; // and : 둘 다 참이어야 참
//expr1 || expr2; // or : 둘중에 하나라도 참이면 참
//!expr; // not : 단일 피연사자의 반대를 반환

const num1 = 10;
const num2 = 20;

const result1 = num1 >= 10 && num2 >= 10; //true
console.log(result1);

const result2 = num1 >= 10 && num2 >= 30; // false
console.log(result2);

const result3 = num1 >= 10 || num2 > 30; // true
console.log(result3);

const result4 = !(result = num1 >= 10 || num2 > 30); //false
console.log(result4);
