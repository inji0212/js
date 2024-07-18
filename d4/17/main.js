/*콜백함수*/

//동기, 비동기

//1. 동기
// 1.1 코드가 순차적으로 실행되는 것
//1.1.1 코드의 순서가 보장이 되는것

//2.비동기
// 2.1 코드가 순차적으로 실행되지 않는 것
//2.1.1 코드의 순서가 보장이 되지 않는 것

// 자바스크립트는 싱글  스레드 언어
//싱글 스레드 언어: 한번에 하나의 작업만 처리 가능
// 자바스크립트: 동기적으로 실행되는 언어
// 자바스크립트처럼 싱글 스레드 언어는 비동기적으로 실행되는 코드가 필요

function task1() {
  setTimeout(() => {
    console.log("task1 시작");
  }, 1000);
  //.. 시간이 오래걸리는 작업
  // setTimeout은 비동기 처리
}

function task2() {
  console.log("task2 시작");
}

task1();
task2();

//task2 시작
// task1 시작

// 무조건 1-> 순서
// 2는 기다렸다 순서대로 실행

// settimeout으로 2,1 가능
// 순서보장 불가
//=> 이때 콜백 함수 사용
// 콜백함수 : 다른 함수의 매개변수로 전달되어
//그 함수가 실행되는 동안 특정 시점에 호출되는 함수
// 매개변수를 직관적으로 callback

// 동기 콜백함수
// 콜백 함수가 동기적으로 실행되는 형태
function greeting(callback) {
  console.log("hello");
  callback();
}
function goodbye() {
  console.log("goodbye");
}

greeting(goodbye);

// hello
// goodbye

// 비동기 콜백함수
// 비동기 작업이 끝난 다음에 호출되는 형태

function task3(callback) {
  setTimeout(() => {
    console.log("task3 시작");

    callback();
  }, 1000);
}

function task4() {
  console.log("task4 시작");
}

task3(task4);

// task3 시작
// task4 시작

//콜백 순서대로
//콜백이 무분별하게 반복되는 형태가 생길 수 있다.

function task5(callback) {
  setTimeout(() => {
    console.log("task5 시작");

    callback();
  }, 1000);
}

function task6(callback) {
  console.log("task6 시작");
  callback();
}
function task7(callback) {
  console.log("task7 시작");
  callback();
}
function task8(callback) {
  console.log("task8 시작");
  callback();
}
function task9(callback) {
  console.log("task9 시작");
  callback();
}
task5(() => {
  task6(() => {
    task7(() => {
      task8(() => {
        task9(() => {
          console.log("모든작업 끝");
        });
      });
    });
  });
});

//콜백지옥
//task5(task6(...)): 이런형태는 콜백이 아니라 함수안에 함수호출하는 형태라
// 콜백이 안됨

//이러한 콜백의 단점을 보완-> promise

function task10() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task10 시작");
      resolve();
    }, 2000);
  });
}

function task11() {
  return new Promise((resolve) => {
    console.log("task11 시작");
    resolve();
  });
}
function task12() {
  return new Promise((resolve) => {
    console.log("task12 시작");
    resolve();
  });
}
function task13() {
  return new Promise((resolve) => {
    console.log("task13 시작");
    resolve();
  });
}
function task14() {
  return new Promise((resolve) => {
    console.log("task14 시작");
    resolve();
  });
}
task10() //
  .then(() => task11())
  .then(() => task12())
  .then(() => task13())
  .then(() => task14())
  .then(() => console.log("모든작업 끝"));

// task10 시작
// task11 시작
// task12 시작
// task13 시작
// task14 시작
// 모든작업 끝
