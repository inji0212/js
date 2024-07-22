/*증감 연산자*/
// 1.1 증가 연산자
// 1.1.1 ++
// 변수에 할당된 숫자값을 1 증가할 때
let num = 10;
const incrementNum = ++num; //11
const incrementNum2 = num++; //10
num++; // 후치연산자 또는 후위연산자: ~ 전에
++num; // 전치연산자 또는 전위연산자: ~ 후에
console.log(num);

/*1.2 감소 연산자*/
//1.2.1 --
// 변수에 할당된 숫자값을 1 감소할 때
let num2 = 10;
const decrementNum = --num; //9
const decrementNum2 = num--; //10
num2--;
num2--;
--num2;
console.log(num2);
