//생성자 함수
//객체를 생성할 때 사용하는 함수를 생성자 함수
//const user1 = { name: "john", age: 30, gender: "male" };
//const user2 = { name: "Anna", age: 20, gender: "female" };
//const user3 = { name: "Alex", age: 25, gender: "male" };
//객체 속성은 똑같다.
// 많은양의 유저가 있을 경우 속성한개를 수정할때 힘들어진다.

//1. 객체의 속성이 같고,
//   값이 다른 경우의 객체를 생성할 수 있는 생성자 함수 문법 제공
// 생성자 함수 첫글자는 대문자

function User() {
  this.name = "john";
  this.age = 30;
  this.gender = "male";
}

const user1 = new User();
console.log(user1);
//User { name: 'john', age: 30, gender: 'male' }

//매개변수가능
function User1(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const user4 = new User1("john", 30, "male");
const user5 = new User1("jane", 20, "female");
const user6 = new User1("alex", 35, "male");
console.log(user4, user5, user6);
//User1 { name: 'john', age: 30, gender: 'male' }
//User1 { name: 'jane', age: 20, gender: 'female' }
//User1 { name: 'alex', age: 35, gender: 'male' }

function User2(name, age, gender) {
  // this ={}
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.introduce = function () {
    console.log(
      "이름: " + this.name + " , 나이: " + this.age + " , 성별: " + this.gender
    );
  };
  // return this
}
const user7 = new User2("john", 30, "male");
user7.introduce();
const user8 = new User2("jane", 20, "female");
user8.introduce();

const user9 = new User2("alex", 35, "male");
user9.introduce();

console.dir(user7);
//함수에만 prototype-constructor 속성이있음
//introduce의 함수가 변할 일은 없다.
//하지만 이 프로토타입엔 매번 introduce가 보인다.
//이건 곧 메모리 낭비가 된다.
//공통된 메서드나 속성, 값들은
// prototype이라는 객체안에 넣어두자-> 이로 인해 만들어지는 객체들은 전부 해당 값을 가지게 된다.

User2.prototype.introduce = function () {
  console.log(
    "이름: " + this.name + " , 나이: " + this.age + " , 성별: " + this.gender
  );
};

const user10 = new User2("john", 30, "male");
console.dir(user10.__proto__ === User2.prototype);
//true
user10.introduce();

const userList = [];
for (let i = 0; i < 900000; i++) {
  userList.push(new User2("john", 30, "male"));
}
//프로토타입에 넣는게 퍼포먼스적으론 좋다.

//많은양의 메서드를 프로토타입에 등록되어있는걸 볼수있다.
//ex) 문자열 String();
//String.prototype.split();
//해당함수가 프로토타입에 있어 사용이 가능했던 것
