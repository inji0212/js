/* 조건문 */

/* if 조건문 */

/*if(논리형 데이터){
  //논리형 데이터가 참(true)이면 실행
}*/

const isLoggedIn = true;

if (isLoggedIn) {
  // 0,null, undefined, "",NaN -> false
  console.log("로그인되었습니다.");
}

/* else if 문*/

const score = 90;
if (score > 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score > 70) {
  console.log("C");
} else {
  console.log("F");
}

// 순서가중요하다.
// else if는 if보다 먼저올 수 없고
// else는 else if보다 먼저 올 수 없다.

const IsLoggedIn = false;
let message = IsLoggedIn ? "로그인되었습니다." : "로그인이 필요합니다.";
let Message = "";
if (IsLoggedIn) {
  //복잡할 떄..
  Message = "로그인되었습니다.";
} else Message = "로그인 필요합니다.";
console.log(Message);

//if문에 의해 일어나는일이 한줄이면 중괄호 생략 가능

/*switch 문*/

const area = "서울";
let baesongbi = 0;

switch (area) {
  case "서울":
    baesongbi = 3000;
    break;
  case "인천":
    baesongbi = 3000;
    break;
  case "남양주":
    baesongbi = 3000;
    break;
  case "경기도":
    baesongbi = 3500;
    break;
  default:
    baesongbi = 10000;
    break;
}

console.log(baesongbi);

// switch도 한개로 묶기 가능
switch (area) {
  case "서울":
  case "인천":
  case "남양주":
    baesongbi = 3000;
    break;
  case "경기도":
    baesongbi = 3500;
    break;
  default:
    baesongbi = 10000;
    break;
}

console.log(baesongbi);
// => 서울이 참인데 코드도 없고 break도 없기때문에 남양주 케이스까지 가서 코드나오고 break;해서 나오는것

switch (area) {
  case "서울":
  case "인천":
  case "남양주":
    baesongbi = 3000;
  case "경기도":
    baesongbi = 3500;
    break;
  default:
    baesongbi = 10000;
    break;
}

console.log(baesongbi);
// 남양주에서 break가 없어서 경기도 케이스까지 넘어가 배송비는 3500원이된다.

// 값으로 구분할때 switch,
// 논리적으로 표현으로 구분할때 if
// if도 값으로 구분가능하다.

const area2 = "경기도";
if (area2 === "서울" || area2 === "인천" || area2 === "경기도")
  baesongbi = 3000;
else if (area2 === "경기도") baesongbi = 3500;
else baesongbi = 10000;

console.log(baesongbi);
