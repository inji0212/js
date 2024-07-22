//03. 연산자

/* 1. 산술 연산자*/
// 곱셈 : *
// 덧셈 : +
// 뺄셈 : -
// 나눗셈 : /
// 나머지 : %

//연산자와 피연산자
//피연산자 : 연산자에 의해 연산이 수행이 되는 대상
const num1 = 10;
const num2 = 10;
const result = num1 + num2;
console.log(result);

// + 덧셈 연산자만 또다른 역할이 있다.
/* 연결 연산자 */
// 문자열을 연결해준다.
const num3 = "A";
const num4 = "B";
const result2 = num3 + num4;
console.log(result2);
//AB

const num5 = false;
const num6 = true;
const result3 = num5 + num6;
console.log(result3);
//1

let num7 = "A";
num7 += "B";
console.log(num7);
//AB

//NaN -> Not A Number
console.log("A" - "B");

//Es6
// 템플릿 문자열

const maxnevel = 99;
const message = "최고 레벨인 " + maxnevel + "에 도달하셨습니다.";
const tmessage = `최고 레벨인 ${maxnevel}에 도달하셨습니다`;
console.log(tmessage);

console.log(max(1, 2));
