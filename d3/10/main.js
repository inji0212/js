//객체
// 1.1 동적으로 속성할 수 있다.
// 1.2 동적으로 속성을 제거할 수 있다.
// 1.3 객체의 속성을 순회할 수 있다.

const obj2 = { a: 1, b: 2, c: 3 };

for (let key in obj2) console.log(key, obj2[key]);
// a 1
// b 2
// c 3

const obj = {}; // 빈 객체 생성
obj.color = "yellow"; //color 프로퍼티 생성
delete obj.color; // color 프로퍼티 삭제
console.log(obj);
//{}

console.log(obj.name);
//undefined

let obj1 = {
  name: "철수",
  address: {
    zipcode: "131809",
    addr1: "서울시 강남구",
    addr2: "한경빌딩 4층 개발팀",
    coupon: [
      { name: " 신규가입할인", discount: 5000 },
      { name: "생일 할인", discount: 10000 },
    ],
  },
  likeFoods: ["banana", "apple", "oragne"],
  getAge() {
    return 20;
  },
};
console.log(obj1.getAge());
console.log(obj1.zipcode);
//console.log(obj1.coupon[1].name);

//복습
const student = {
  name: "sucoding",
  age: 20,
  gender: "male",
  introduce: function () {
    return `hello, my name is ${this.name} and I'm ${this.age} years old`;
  },
};

console.log(student["super ages"]);

//함수를 이용하는 방법이 있다.
// 객체를 생성하는 함수를 만들 수 있다.
// 생성자함수 - 객체를 생성하는 함수
// 1. 함수 선언식으로 선언 = 관례
// 2.  함수 식별자의 첫글자는대문자입니다.
// 2.1 카멜케이스 userName 관례
// 2.2 스네이크케이스 user_name 사용하지 않음
// 2.3 파스칼 케이스 UserName 생성자 함수 또는 클래스

function studentA() {
  //this = {};
  this.name = "sucoding";
  this.age = 20;
  this.gender = "male";
  this.introduce = function () {
    return `hello, my name is ${this.name} and I'm ${this.age} years old`;
  };
}
//return this;

const student1 = new studentA();

console.log(student1);
// studentA {
//   name: 'sucoding',
//   age: 20,
//   gender: 'male',
//   introduce: [Function (anonymous)]
// }
console.log({}); //{}

function sum(a, b) {
  console.log(arguments);
  //[Arguments] { '0': 10, '1': 20 }
}

sum(10, 20);
console.log([]);

function StudentB(name = "김기수", age = 20, gender = "male") {
  //this ={};
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.introduce = function () {
    return `hello, my name is ${this.name} and I'm ${this.age} years old`;
  };
}

//return this;
//student2를 인스턴스라고 부른다.
const Student2 = new StudentB("sucoding", 25, "female");
console.log(Student2);

//__proto__ :생성자 함수의prototype객체를 가리(참조)킵니다.
// 모든 함수는 프로토타입을 가진다.(1대1)
console.log(Student2.__proto__);

function Student3(name = "김기수", age = 30, gender = "male") {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Student3.prototype.introduce = function () {
  return `hello, my name is ${this.name} and I'm ${this.age} years old`;
};
//프로토타입에 introduce를 생성
//생성자 함수내에 introduce를 생성하지 않아도 자동 생성된다.
const student3 = new Student3("inji", 26, "female");
console.dir(student3);
//Student3 { name: 'inji', age: 26, gender: 'female' }

console.dir(student3.introduce());
//"hello, my name is inji and I'm 26 years old"
