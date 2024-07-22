/* function membershipCard() {
     return function () {
       return function () {
         return {
           name: "수코딩 온라인 사이트",
           grade: "basic",
         };
       };
     };
 }*/

const membershipCard = () => () => () => ({
  name: "수코딩 온라인 사이트",
  grade: "basic",
});
console.log(membershipCard()()());

//Q1

// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다

const Sum = (...arr) => {
  let result = 0;
  for (value of arr) {
    result += value;
  }
  console.log(result);
};

Sum(1, 3, 5, 7, 9);

//Q2

//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.
//구현 방법은 자율입니다.

const Math1 = (str) => str;
const Math = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], i);
  }
};

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

console.log(calculate(2, 5, "*"));

//Q3

//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.

// const isEven = (num) => {
//   if (num % 2 === 0) return true;
//   else return false;
// };

const isEven = (num) => (num % 2 === 0 ? true : false);

console.log(isEven(7));

//Q4

//양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
//함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

// const factorial = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) result *= i;
//   return result;
// };

/* 재귀함수 */
// 함수안에서 자기 자신을 호출하는 함수
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
  // 5 * factorial(4)
  // 5 * 4 * factorial(3)
  // 5 * 4 * 3 factorial(2)
  // 5 * 4 * 3 * 2 * factorial(1)
};

console.log(factorial(5));

//Q5
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
const triangleArea = (a, b) => (a * b) / 2;

console.log(triangleArea(10, 5));
