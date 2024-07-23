/*클래스 사용법 */

//기본적인 클래스 형태
class Object {
  constructor() {
    //...
  }
  hasOwnPreperty() {
    //...
  }
}

class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return `이도형의 색상은 ${this.color}입니다.`;
  }
  // 클래스로 생성한 인스턴스의 메서드는
  // 자동으로 프로토타입 객체쪽으로 등록이된다.
  // 메모리 신경쓸 필요도 없어 편하다.
}
const shape1 = new Shape("red");
console.log(shape1);
//Shape { color: 'red' }

//extends 상속받을때 사용
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    //  Shape.call(this, color); 대신 사용

    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle("blue", 20, 20);
console.dir(rect1);
//Rectangle { color: 'blue', width: 20, height: 20 }

console.log(rect1.getColor());
//이도형의 색상은 blue입니다.

console.log(rect1.getArea());
//400

//setter
//getter
//static

class Car {
  constructor(speed) {
    this.speed = speed;
  }
  //set은 매개변수가 있어야한다.
  // 해당 매개변수에 조건을 거는거라
  set speed(speed) {
    if (speed < 0) {
      throw new Error("속도는 음수가 될 수 없습니다.");
    }
  }

  getSpeed() {
    return `현재속도는 ${this.speed}입니다.`;
  }
}

//const car1 = new Car(-100);
//console.log(car1.getSpeed());
//Error: 속도는 음수가 될 수 없습니다.
const car2 = new Car(100);
console.log(car2.getSpeed());
//현재속도는 undefined입니다.

class CarA {
  constructor(speed) {
    this.speed = speed;
  }
  //set은 매개변수가 있어야한다.
  // 해당 매개변수에 조건을 거는거라
  set speed(speed) {
    if (speed < 0) {
      throw new Error("속도는 음수가 될 수 없습니다.");
    }
    //this.speed = speed;
    // 콜스택에 메모리가 가득차게됨
    this._speed = speed;
    // 매번 새로운 아이디를 주기엔 한계가 있다.
  }
  get speed() {
    return this._speed;
    //매번 변수명을 바꿔줘야하는 문제 해결
  }
  // get을 사용하면 기존 메서드도 속성처럼 사용가능
  /* get*/ getSpeed() {
    return `현재속도는 ${this.speed}입니다.`;
  }
  // getSpeed가 이중으로 생성되어 권장x
}

const car3 = new CarA(100);
console.log(car3.getSpeed());

class CarB {
  #name;
  //프라이빗한 변수 설정
  // 이 변수는 외부에서 변경이 불가능하다.
  constructor(name, speed) {
    this.#name = name;
    this.speed = speed;
  }

  set speed(speed) {
    if (speed < 0) {
      throw new Error("속도는 음수가 될 수 없습니다.");
    }

    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }

  get name() {
    return this.#name;
  }
  getCarName() {
    return `차이름은 ${this.name}입니다.`;
  }
  getSpeed() {
    return `현재속도는 ${this.speed}입니다.`;
  }
}

const car4 = new CarB("벤츠", 110);

console.log(car4.getCarName());
console.log(car4.getSpeed());
//차이름은 벤츠입니다.
// 현재속도는 110입니다.
car4.name = "아우디";
console.log(car4.getCarName());
console.log(car4.getSpeed());
// 차이름은 벤츠입니다.
// 현재속도는 110입니다.

class CarC {
  #name;
  // 정적 속성
  static CREATED = "2022";
  // 정적 메서드 선언도 가능
  // 이역시도 인스턴스로 불가
  // 직접 클래스로 지칭 가능

  constructor(name, speed) {
    this.#name = name;
    this.speed = speed;
  }

  set speed(speed) {
    if (speed < 0) {
      throw new Error("속도는 음수가 될 수 없습니다.");
    }

    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }

  get name() {
    return this.#name;
  }
  getCarName() {
    return `차이름은 ${this.name}입니다.`;
  }
  getSpeed() {
    return `현재속도는 ${this.speed}입니다.`;
  }

  //정적 메서드 static
  static getSpec() {
    return "차는 타이어 4개와 문 4개가 있습니다.";
  }
  //정적 메서드가 되어 ,인스턴스 에서 사용불가
  //class이름을 그대로 적으면 사용가능하다.
}

const car5 = new CarC("벤츠", 110);

car5.name = "아우디";
console.log(car4.getCarName());
// 차이름은 벤츠입니다.
console.log(car4.getSpeed());
// 현재속도는 110입니다.
console.log(CarC.getSpec());
// 차는 타이어 4개와 문 4개가 있습니다.
console.log(CarC.CREATED);
//2022

class Mathutils {
  static PI = 3.1415;
  constructor() {}
  static add(a, b) {
    return a + b + 10;
  }
  static delete(a, b) {
    return a - b - 3;
  }
}

console.log(Mathutils.add(7, 10) + Mathutils.delete(20, 5));
