/* class */
// 자바스크립트는 클래스가 없다.
// 슈가 신텍스(syntactic sugar): 기존 문법을 활용해 편의성이나 기능을 더한 문법
// es6엣 클래스가 추가되었지만 문법적인 것
// 자바스크립트는 프로토타입 기반의 언어
// 즉 자바스크립트의 클래스는 프로토타입을 이용한 슈가 신택스

function Shape(color) {
  this.color = color;
  this.getColor = function () {
    return `이도형의 색상은 ${this.color}입니다`;
  };
}

const shape1 = new Shape("red");
console.log(shape1.color);
// red

console.log(shape1.getColor());
// 이도형의 색상은 red입니다

function Rectangle(color, width, height) {
  //클래스가 없는데 클래스가 있어보이게하기위해
  Shape.call(this, color);
  this.color = color;
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("blue", 20, 20);
console.log(rect1);
//Rectangle {
//     color: 'blue',
//     width: 20,
//     height: 20,
//     getArea: [Function (anonymous)]
//   }

console.log(rect1.getArea());
//400

console.log(rect1.getColor());
//이도형의 색상은 blue입니다
