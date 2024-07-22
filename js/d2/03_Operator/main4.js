/* 비교연산자 */

/*동등 연산자*/
const num1 = 10;
const num2 = 10;
const strNum = "10";

console.log(num1 == num2);
//true

console.log(num1 == strNum);
//true
//동등연산자는 자료형 종류를비교하지않는다.
//순수하게 값이 일치하는지만 비교
//자료형을 변환시킨다.(형변환)
// 실무에선 지양해야한다.

/* 일치 연산자 */
console.log(num1 === num2);
//true

console.log(num1 === strNum);
//false
//자료형까지 비교한다.

/* 부등 연산자 */
console.log(num1 != num2);
//true

console.log(num1 != strNum);
//true
//암묵적으로 형변환을 해서 비교를 한다.

/*불일치 연산자*/
console.log(num1 !== num2);
//true

console.log(num1 !== strNum);
//false

/* 부등호 연산자 */
const Num3 = 20;
const strNum2 = "20";

console.log(num1 >= strNum2);
//이 역시도 암묵적 형변환
