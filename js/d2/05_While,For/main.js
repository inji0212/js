/*반복문*/
// while, do..while, for, for..in, for..of

// 무한 루프(infinie loop,무한 반복문)
let num = 0;
while (num < 10) {
  console.log(num); // 무한 반복문을 만드는 실수
  num++;
}

// 조건문이 참이면 블록안 코드를 해당 조건문이 거짓될 때까지 반복

/*do while문*/
// 무조건 한번은 실행후 반복
do {
  num++;
  console.log(num);
} while (num < 10);

/*for(초기문;조건문;증감문)*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// i는 0부터 9까지 반복

/*for in문*/
// 배열이나 객체를 반복하는것

let arr = ["banana", "apple", "orange"];

//배열의 인덱스 번호를 가져옴
for (let index in arr) {
  console.log(arr[index]);
}

let obj = { name: "철수", age: 20 };

//배열의 키 번호를 가져옴
for (let key in obj) {
  console.log(obj[key]);
}

/*for of 문*/
//배열만 가능

//값을 가져옴
for (let value of arr) {
  console.log(value);
}

//배열의 갯수를 알고 싶다면?
//arr.length
const numArr = [10, -10, 20, -30, 40];
console.log(numArr.length);

// 문자열도 가능
// 문자열의 길이
const str = "hello world!";
console.log(str.length);

//또한 배열이 아니더라도 문자열도
// str[1]인덱스로 각각의 글자에 컨택가능
console.log(str[1]);

//거듭제곱 연산자
//**
//2**3 = 8
//3**3=27
