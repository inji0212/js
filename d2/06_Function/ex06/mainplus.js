//06. 함수 연습문제+

//01
function compress(str) {
  let count = 1;
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] === str[index + 1]) {
      count++;
    } else {
      result += str[index];
      result += count;
      count = 1;
    }
  }
  console.log(result);
}

compress("aaabbbccc");
compress("aabbcc");
compress("abbbffd");

//02
function gugudan(num) {
  for (let i = 1; i < 10; i++) console.log(`${num}X${i} = ${num * i}`);
}

gugudan(3);
gugudan(4);
gugudan(5);
