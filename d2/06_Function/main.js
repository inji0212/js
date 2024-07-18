//06. 함수
// 연관된 특정 로직을 일관적으로 실행시키고 싶을때
// 함수 표현식을 축약시킨게 함수 선언식이라 생각하면 됨

/* 1.1 함수선언식 */
// function gugudan3(){
//   console.log("3*1=3");
//   console.log("3*2=6");
//   console.log("3*3=9");
//   console.log("3*4=12");
//   console.log("3*5=15");
//   console.log("3*6=18");
//   console.log("3*7=21");
//   console.log("3*8=24");
//   console.log("3*9=27");
// }​
// gugudan3(); // 실행시키는 방법

/* 1.2 함수표현식 */
// 1.2.1 익명 함수 unnamed
// 함수 이름에 식별자가 없음

const gugudan4 = function () {
  console.log("4*1=4");
  console.log("4*2=8");
  console.log("4*3=12");
  console.log("4*4=16");
  console.log("4*5=20");
  console.log("4*6=24");
  console.log("4*7=28");
  console.log("4*8=32");
  console.log("4*9=36");
};

gugudan4(); // 실행시키는 방법

// 1.2.2 기명함수 named
// 함수 이름에 식별자가 있음
// 좀더 권장함

//101호-> 김기수
//카운터-> 101호를 안다.

const gugudan5 = function gugudan() {
  console.log("5*1=5");
  console.log("5*2=10");
  console.log("5*3=15");
  console.log("5*4=20");
  console.log("5*5=25");
  console.log("5*6=30");
  console.log("5*7=35");
  console.log("5*8=40");
  console.log("5*9=45");
};

gugudan5(); // 실행시키는 방법
//gugudan(); 할시 불러올 수 없다.

//매개변수(parameter)-> 함수를 호출할때 전달한 값을 받는 변수
//함수는 매개변수를 전달할 수 있다.
// 함수의 재사용성을 높혀준다.
function gugudan(dan) {
  console.log(`${dan} *1= ${dan * 1}`);
  console.log(`${dan} *2= ${dan * 2}`);
  console.log(`${dan} *3= ${dan * 3}`);
  console.log(`${dan} *4= ${dan * 4}`);
  console.log(`${dan} *5= ${dan * 5}`);
  console.log(`${dan} *6= ${dan * 6}`);
  console.log(`${dan} *7= ${dan * 7}`);
  console.log(`${dan} *8= ${dan * 8}`);
  console.log(`${dan} *9= ${dan * 9}`);
}
gugudan(99);

const gugudanA = function gugudanA(dan) {
  console.log(`${dan} *1= ${dan * 1}`);
  console.log(`${dan} *2= ${dan * 2}`);
  console.log(`${dan} *3= ${dan * 3}`);
  console.log(`${dan} *4= ${dan * 4}`);
  console.log(`${dan} *5= ${dan * 5}`);
  console.log(`${dan} *6= ${dan * 6}`);
  console.log(`${dan} *7= ${dan * 7}`);
  console.log(`${dan} *8= ${dan * 8}`);
  console.log(`${dan} *9= ${dan * 9}`);
};

// 매개변수는 여러개 가능하다.

function add(a, b) {
  console.log(a + b);
}
add(10, 20);
add(); // undefined으로 콘솔에 뜬다. 에러x

//매개변수 직접 선언도 가능하다.
function printTxt(msg = "hello", name = "sucoding") {
  console.log(msg, name);
}
printTxt();

function add(a, b, c = 0) {
  //c=0은 c 값을 받지 않을때 0을 준다.
  console.log(a + b + c);
}
add(10, 20); // 그냥하면 c는 undefined되어 콘솔에 NaN이 된다.
add(10, 20, 30);

//...a
//매개변수가 몇개든 전부 배열형태로 가능
function add(...a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  console.log(sum);
}
// 재사용성이 높은함수로 사용 가능해진다.

function add(a, ...args) {
  // a는 무조건 받고 그뒤에는 나머지 매게변수로 자유롭다.
  // 나머지 매개변수 ...arr은 무조건 마지막에 들어올 수 있다.
  // 가변인자, 나머지 매개변수, 가변변수, 가변 매개변수, 동적 매개변수등 지칭하는 단어들이 많다.
  console.log(a, args);
}
add(10, 20, 30, 40, 50);

//dir은 객체를 자세히보고싶을때
function add() {}
console.dir(add);

//자세히보면 arguments등 다양한 속성이 존재한다.(코드가 없어도)
// 즉 함수도 결국 객체라고 볼 수 있는것

console.log(arguments[1]); //arguments-> 1:10, 2:20,
// 이런형태로 하면 배열처럼 생김
//유사배열객체

let sum1 = 0;
for (let i = 0; i < arguments.length; i++)
  ~(
    //형태도 가능하다. 벗 나머지 매게변수가 나타난 뒤로  사용않는 형태

    //리턴은 함수 안에서만 호출가능하다.
    //리턴을 만나는 순간 코드가 종료된다.
    function add(a, b) {
      const sum1 = a + b;
      return sum1;
    }
  );

function printNumber(number) {
  console.log(`${number}가 출력되었습니다.`);
}
const sum = add(10, 20);
printNumber(sum);

// 리턴은 값을 넘겨주는게 기본 성질
// 리턴만 있을경우 아무일도 안 일어나느게 아니라
// undefined이 나오는것

function membershipCard(isLoggedIn) {
  if (!isLoggedIn) {
    return "로그인이 필요합니다";
  }
  return {
    name: " 코딩 사이트",
    grade: "basic",
  };
}

const membership1 = membershipCard(false);
console.log(membership1);

// 리턴이 반환할 수 있는 데이터 종류는 한종류로만 가능
function membershipCard(isLoggedIn) {
  //외부함수
  return function () {
    //내부함수
    return {
      name: " 코딩 사이트",
      grade: "basic",
    };
  };
}

const membership = membershipCard();
console.log(membership());

// 함수가 세번 호출디는 형태면 membership()();로 호출해야한다.

//1.3 화살표 함수 => 함수를 정의하는 방법
//소괄호와 중괄호 사이에 화살표
//선언방식이라기엔 정의내리지 않을 수 있기 때문에 무리가있음
const addA = () => {};
addA(); //사용 방법
() => {};

const membershipCardA = () => {
  return {
    name: " 코딩 사이트",
    grade: "basic",
  };
};

//다른 로직없이 값을 반환하는 것만있다면
//리턴, 중괄호 생략가능
// 반환이 객체일 경우 return만 생략가능
const addB = (a, b) => a + b;

const membershipCardB = () => {
  ({
    name: " 코딩 사이트",
    grade: "basic",
  });
};

const membershipCardC = (sitename) =>
  // 매개변수가 한개일때 소괄호 생략가능
  ({
    name: ` ${sitename}코딩 사이트`,
    grade: "basic",
  });
