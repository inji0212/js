const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 20, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 찾기
{
  const result = students.find((students) => students.height === 185);
  console.log(result.name);
}

//2. 나이가 20살 이상인 학생들 찾기
{
  const result = students.filter((students) => students.age >= 20);
  const namesArray = result.map((student) => student.name);
  console.log(namesArray);
  //push
}

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
  const result = students.some((students) => students.height <= 165);
  console.log(result);
}

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
{
  const result = students.every((students) => students.age >= 10);
  console.log(result);
}

//5. 학생들의 평균 연령 구하기
{
  const ageArray = students.map((student) => student.age);
  const sum = ageArray.reduce((a, b) => a + b);
  console.log(Math.round(sum / ageArray.length));
}

//6. 남학생들의 평균 연령 구하기
{
  const male = students.filter((students) => students.gender === "male");
  const ageArray = male.map((student) => student.age);
  const sum = ageArray.reduce((a, b) => a + b);
  console.log(Math.round(sum / ageArray.length));
}

//7. 야학생들만 따로 추출해서 새로운 배열 만들기
{
  const female = students.filter((students) => students.gender === "female");
  console.log(female);
}

//8. 여학생들 중 나이가 가장 어린 학생 찾기
{
  let female = students.filter((students) => students.gender === "female");
  const ageArray = female.sort((a, b) => a.age - b.age);
  /*
EX. 20,19,17,22
1. 1,2,-5, 2 -5 1 2 2 17, 20 19 22
2. -3, 1,-3, 5 -3 -3 1 5 17 19 20 22
3. -2, -1, 2, 5 

*/
  console.log(ageArray[0].name);
}
