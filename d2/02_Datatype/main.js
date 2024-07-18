// 0. 자료형
const n = 10;
// 값에 들어갈 수 있는 형태

/* 1. 기본 자료형 */
// 1.1 숫자, 문자열(형), 논리, 특수, 심볼
// -> 가장 기본이 되는것

/* 1.1.1 숫자 Number */
// -> 우리가 생각하는 수의 값, 양수, 음수, 정수, 소수, 지수...
let num = 10;
num = -10;
num = 3.14;
num = -3.14;
num = 10e12;

console.log(num);

/* 1.1.2 문자열(형) */
// -> 큰 따옴표나 작은 따옴표로 감싸진 값을 ("",'')
const string = "10";

console.log(string);

/* 1.1.3 논리형 */
// 논리적인 판단의 참, 거짓 -> true, false
const bool = true;
const bool2 = false;

console.log(bool, bool2);

/* 1.1.4 특수 자료형 */
// 1.1.4.1 undefined -> 개발자가 아닌 자바스크립트가 담는 값
const tvChannel = undefined;
//-> 변수를 선언하고 값을 선언하지 않을때

console.log(tvChannel);

// 1.1.4.2 null -> 개발자가  의도를 가지고 변수 할당을 비워둠
const movieChannel = null;

console.log(movieChannel);

// 1.1.5 심볼 - 절대로 중복되지 않는 유니크한 값을 생성
// -> symbol()
//const t = symbol("주석의 느낌으로 메세지를 넣을 수 있다. ");
//const a = symbol();
// t!=a

//console.log(t);
// 자바스크립트의 내장 함수

// 2. 참조 자료형
// 2.1 배열, 객체, 함수
// -> 자바스크립트의 꽃

/* 2.1.1 배열 */
// -> 여러개의 값ㅇ르 묶어둔 값
// -> 순수하게 값 묶음
const scoreArr = [90, 40, 50, 80]; //국어, 영어, 수학, 과학
// 주석 없이는 키를 알 수 없다.
// 직관적이지 않다.

console.log(scoreArr);
//[ 90, 40, 50, 80 ]

console.log(scoreArr[0]); // 0번째부터 시작
//90

/* 2.1.2 객체 */
// -> 여러 개의 ㄱ밧ㅇ르 묶어둔 ㄱ밧
// -> 값을 (키,값) 묶어둠
const scoreObj = {
  KoreanScore: 90,
  EnglishScore: 40,
  MathScore: 50,
  ScienceScore: 80,
};

//주석없이도 알아볼 수 있다.
//직관적이다.

console.log(scoreObj);
//{ KoreanScore: 90, EnglishScore: 40, MathScore: 50, ScienceScore: 80 }

/*마침표 연산자(.)*/
console.log(scoreObj.EnglishScore);
//40

/*대괄호 연산자 ([])*/
console.log(scoreObj["KoreanScore"]);
//90

/* 2.1.3 함수 */
//function
function sum() {
  //실행시키고 싶은 코드...
}

// 기본 자료형과 참조자료형의 차이 :  변수 할당하는 방식
const num1 = 10;
const num2 = num1;
console.log(num1 === num2);
//true
// 기본자료형 = 원시타입

const arr1 = [10, 20];
const arr2 = [10, 20];
console.log(arr1 === arr2);
//false
//[10,20] 값을 메모리에 넣어서 OXO1이라는 자리값이 들어간다.
//OXO1===OXO2를 비교하게 된 것

/*typeof num : 자료타입 확인 */
console.log(typeof arr1);
// object -> 자바스크립트의 버그
