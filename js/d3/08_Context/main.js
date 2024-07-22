// 실행 컨텍스트
// 자바스크립트 코드가 실행될 때 필요한 환경을 제공해주는 객체
// 선언부분이 끌어올려지는 현상을 호이스팅
// var, let, const 다 끌어올려짐-> 호이스팅됨
// let,const 값이 할당이 안되고
// var,function은 할당이되는 것
/// 1. 실행 컨텍스트
/// 1.1 레코드 객체
/// 1.1.1 생성
/// 1.1.1.1 선언된 부분을 기록
/// 1.1.1.1.1 완성된 기록(var,(function,+ console같은 메서드))
/// 1.1.1.1.2 미완성된 기록 (let,const, 화살표함수)

/// 1.1.2 실행
/// 1.1.2.1 생성단계에서 기록된 코드를 참조, 코드 실행및 업데이트
/// 1.1.2.2. 업데이트 -> 미완성 기록을 업데이트
/// 1.1.2.2.1 미완성된 기록이 업데이트되기 전까진 참조 불가
/// 1.1.2.2.2 완성된 기록은 참조 가능

var uname = "수코딩";
console.log(uname);
//var일 경우 undefined으로 초기화된다.

//가장 밑에 깔리는 전역 실행 컨텍스트
//모든 자바는 전역 실행 컨텍스트가 존재
// 실행 컨텍스트엔 record와 outer
// recorder에 생성, 실행
// 생성- 내가 실행할 코드의 변수, 선언을 저장
// 실행 - 생성에서의 변수 ,선언을 참조하여 코드 실행 + 업데이트
// 생성한 뒤 실행

// outer - 자신의 밑에 있는 다른 실행 킨텍스트를 연결하는 것
// 현재의 킨텍스트에서 호출한 변수나 선언이 없으면 다른 실행 컨텍스트로 넘어가서 해당 변수를 찾음

console.log(uname);
var uname = "수코딩";
//앞서 말한 이론으로 생성에서 undefined으로 저장한 uname이라서 에러 발생 X
//하지만 let,const는 다름
//let,const는 생성단계에서 undefined이 아닌 아무값도 넣지 않는다.
// 실행단계에선 아무것도 없기에 레퍼런스 에러가 나는것

const num = 10;
printNum();
//생성단계에서 기록이 되어서 실행시 에러안나고 가능한 것

function printNum() {
  const num = 30;
  //새로운 컨텍스트에선 새로 선언 가능
  //자신과 같은 컨텍스트에 있는것을 1순위로 가져옴
  //이 함수에서 만 num 30을 저장
  // 이 함수에서 나오면 num 은 다시 10을 이용
  const name = "철수";
  console.log(num);
}

//console.log(name);
printNum();
console.log(" 전역 실행 컨텍스트 종료");
// name은 함수 컨텍스트에 선언되어 있어
// 전역 컨텍스트엔 name저장이 없어 에러

// 무조건 먼저 실행하는건 전역 컨텍스트
//함수가 호출될때만 새로운 컨텍스트를 생성

const num1 = 10;
function floor2() {
  const num1 = 20;
  function floor3() {
    console.log(num1);
  }
  floor3();
}
floor2();
console.log(num1);

//20,10

const num3 = 10;
function floor2() {
  const num3 = 20;
  console.log(num3);
}
function floor3() {
  const num3 = 30;
  console.log(num3);
}

floor2();
floor3();

//20,30

/* 클로저*/
// 클로저는 실행 컨텍스트가 정상적으로 제거(종료)되지 못하는 현상.

function outerFunc() {
  let count = 0;
  return function innerFunc() {
    count++;
    // 함수에서 선언한 변수사용으로 컨텍스트를 제거 불가한 상황
    // 제거를 해야 다른 컨텍스트로 넘어갈 수 있어서 임시보관
    console.log(count);
  };
  // return 은 값을 아래 킨텍스트로 기록
}

const counter = outerFunc();

counter(); //1
counter(); //2
counter(); //3
counter(); //4
counter(); //5
// 이런 상황이 계속 지속되면
// 메모리 누적 이 많아져 퍼포먼스가 떨어진다.

counter = null; //참조를 의도적으로 없앰
// 의도적으로 해당 코드를 초기화하는 코드를 넣기
// 임시보관하는것을 끊내어 해당 메모리를 삭제할 수 있기에
// 메모리 누수 에방
