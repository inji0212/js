/* 14.배열 내장 객체 */

// 1. 인스턴스 메서드
// 1.1 파괴적 메서드
// 1.1.1 인스턴스 메서드를 호출했을때, 원본 데이터가 연결이 되는 메서드
// 1.2 비파괴적 메서드
// 1.2.1 이 메서드를 호출했을때 원본데이터가 변경되지 않는 메서드

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects

//array

//join()
//array
// 배열 사이에 ()을 넣어준다.
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"
//
//
// 셀렉트 -[] -[]
const phone = ["010", "1234", "5678"];
console.log(phone.join("-"));

// array
// filter
// 배열 필터
const words2 = ["spray", "elite", "exuberant", "destruction", "present"];

const result1 = words2.filter((word) => word.length > 6);
const result2 = words2.filter((word) => word[0] === "e");

console.log(result1);
// Expected output: Array ["exuberant", "destruction", "present"]
console.log(result2);
//[ 'elite', 'exuberant' ]

//string
//startsWith()
//()로 시작하는 단어
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 3));
// Expected output: false

const result3 = words2.filter((word) => word.startsWith("el"));
console.log(result3);

//array
//some()
// 해당 배열이 하나라도 조건을 하나라도 만족하면 true
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
//필터와 비슷하지만 다른것
// 필터는 해당요소들만 가져와 새로운 배열을 만든다.
// some은 비파괴적으로 해당 조건의 요소가 있는지만 확인

//every()
//some과 반대되게 every는 모두 해당되어야 true

//string.search()
// 해당 조건을 찾는다.
// 배열이 아니라 가장앞에있는것 하나의 인덱스를 찾는다.

const paragraph = "I think Ruth's dog is cuter than your dog!";

// Anything not a word character, whitespace or apostrophe
const regex = /[^\w\s']/g;

console.log(paragraph.search(regex));
// Expected output: 41

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "!"

//string .includes()
// 해당 조건이 포함되면 true
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// Expected output: "The word "fox" is in the sentence"

//array
//find()
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12

//array
//includes()
const array2 = [1, 2, 3];

console.log(array2.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

//파괴적 메서드
// array
//pop()
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

//array
//shift
const array3 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

//array
//slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//array
//sort()

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array4 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array4);
// Expected output: Array [1, 100000, 21, 30, 4]

// 결과보면 순서대로가 아니라 가장 앞 숫자를 비교해서 나열

//숫자를 순서대로 할려면?

//arr.sort([compareFunction]);

var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]

//객체도 가능 a.age, b.age로 비교
// a.age>b.age return -1 인덱스
// a.age<b.age return 0 인덱스

//array
//reduce()
//모두 더하거나 모두 빼거나
// 각요소에 실행시킨뒤 하나의 결과를 반환
const array5 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array5.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

const sumWithInitial2 = array5.reduce((prevValue, curValue) => {
  console.log(prevValue, curValue);
  return prevValue + curValue;
}, 0);
console.log(sumWithInitial2);
// 0 1
// 1 2
// 3 3
// 6 4
// 10

const str2 = "ABC";
