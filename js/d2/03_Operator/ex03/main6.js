// 1
const a = true;
const b = false;

console.log(a && b); //false

console.log(a || b); //true

console.log(!a); //false

// 2
const x = 1;
const y = 2;
const z = 4;
const result = x > 10 && y < 5;

console.log(result); //false

const result2 = x > 10 || z > 3;
console.log(result2); //true

const result3 = y !== 0 ? true : false;
console.log(result3); //true

// 3
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn ? "Welcome" : "Please log in");
//Welcome

console.log(isAdmin ? "Admin access granted" : "Admin access denied");
//Admin access denied

console.log(
  isAdmin && isLoggedIn ? "Full access granted" : "Restricted access"
);
//Restricted access

//4
const value1 = undefined;
const value2 = null;

//0, undefined,null, "", Nan은 삼항 연산자일때만 false로 변환 이외는 모두 true
//! 를 붙여 강제로 true, false로 변환 하지만 반대의 의미생김
//!! 두번 부여 참 거짓으로 변경후 원래 의미로 변환

console.log(!!value1 || !!value2); // 1개라도 값이 존재하면 true
//false

console.log(!value1 && !value2 ? true : false); // 두변 모두 값이 없으면 true
//true

//5
const num = 1001;

console.log(0 <= num && num <= 100 ? true : false); //false

console.log(0 > num || num > 100 ? true : false); //true
