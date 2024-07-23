// promise
// 비동기 처리를 도와주는 자바스크립트 내장 객체
// ex. 알람은 웹브라우저
// 비동기 작업을 처리할 수 있게 도와주는 객체
// pending: 비동기 처리가 아직 수행되지 않는 상태
// 대기 중 상태
// fulfilled : 비동기 처리가 수행된 상태
// 성공 상태
// rejected: 비동기처리가 실패한 상태
// 실패 상태
// then, catch, finally 로 결과를 받음
// 매개변수들은 생략 불가능하다.
// 변수명은 상관없이 앞은 resolve, 뒤는 reject

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업을 수행하는 코드

//   // 작업이 성공하면 resolve(value) 호출
//   // 작업이 실패하면 reject(error) 호출

//   console.log("doing something..");
//   // doing something..
//   // Promise { <pending> }

//   resolve("success");
//   //   doing something..
//   // Promise { 'success' }

//   /*reject(new Error("failed"));*/
//   //doing something..
//   //Promise { <rejected> 'failed' }
// });

//resolve일때 호출
// promise.then(
//     (value) => console.log(value), //fulfilled
//     (error) => console.error(error) //rejected
//   );
//   // success가 value

//   //reject일때 호출
//   promise.catch((error) => console.error(error));

//   //상간없이 호출
//   promise.finally(() => console.log("finally"));

//   console.log(promise);

// doing something..
// Promise { 'success' }
// success
// finally

// 매개변수들은 생략 불가능하다.
const promise = new Promise((resolve, reject) => {
  const isSuccess = true;
  setTimeout(() => {
    isSuccess ? resolve("success") : reject(new Error("fail"));
  }, 3000);
});

//resolve일때 호출
promise.then(
  (value) => console.log(value), //fulfilled
  (error) => console.error(error) //rejected
);
// success가 value

//reject일때 호출
promise.catch((error) => console.error(error));

//상간없이 호출
promise.finally(() => console.log("finally"));

console.log("hello");

// hello
// success
// finally

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber //
  .then() // fullfilled
  .catch(); // rejected

fetchNumber //
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        resolve(num * 2); // => 12
        //      reject(new Error("error")); =>error
        //reject(num); =>6
      })
  ) //promise resolve(2);
  .catch((num) => num)
  .then((num) => num * 3) //promise resolve(6);
  .catch((num) => num)
  .then((num) => num * 2) //promise resolve(12);
  .catch((num) => num)
  .then((num) => console.log(num))
  .catch((num) => num);

//  .catch((error) => console.log(error));
//12

fetchNumber //
  .then(
    (num) =>
      new Promise((_, reject) => {
        reject(new Error("error"));
      })
  ); //promise resolve(2);

//resolve를 사용하지 않아도 _ 사용하면됨

promise //
  .then((num) => {
    console.log("hi~");
    return num * 2;
  }) // resolve()
  .then((num) => new Promise((resolve, rejected) => rejected(error)))
  .then((num) => console.log(num));
//.catch((error)=>console.log(error))

//순차적으로 진행
// 중간에 에러나면 그이후로부터 실행을안한다.
// then() 에러나면 이후의 then() 실행되지 않는다.
