/*

[문제]
매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
함수를 만들어주세요.

ex) 32125 -> 52123
    15231 -> 13251 
*/

//array reverse?
function reverse_to_number(number) {
  let str = number.toString().split("");
  str.reverse();
  return str.join("");
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231

/*
  [가장 긴 단어를 출력하기]

  매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.

*/

function findLongStr(str) {
  const words = str.split(" ");
  let max = 0;
  for (let index = 1; index < words.length; index++) {
    if (words[index].length > words[max].length) {
      max = index;
    }
  }
  return words[max];
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
