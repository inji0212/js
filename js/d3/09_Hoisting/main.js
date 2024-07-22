//호이스팅
// 선언부가 최상단을 올라가는 현상
// 선언과 할당

//var
//let, const불가

var name;
console.log(name);
var name = "철수";

// 호이스팅에 의해 var name이 undefined으로 선언됨
// let, const는 레코드 생성시 해당값들을 undefined이 아닌 비어있는 값으로 선언해
// 실행시 할당된 값이 없어 에러가 난다로 이해
// 호이스팅이 온전해야 호이스팅이라 본다.
// let, const는 흔적만 남아있뿐이므로 호이스팅이라 볼 수 없다.

printTxt();

function printTxt() {
  console.log("hello");
}
// 이 형태의 함수 선언식이기에 코드블럭 자체가 위로 호이스팅
// 함수 내용이 선언에 있어 위로 올라갔을때 함수를 읽을 수 있어
// 즉, 함수 선언이 온전해 호이스팅이 된다.
printTxt();

const printTxt = () => {
  console.log("hello");
};
// 화살표함수의 경우  const printTxt = () =>  선언을 했기에
// 선언문이 있다고 판단하지만 비어있는 함수 선언문을 호이스팅해 에러가난다.
