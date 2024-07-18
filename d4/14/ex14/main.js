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
  function isHieght(students) {}
  const result = students.find((students) => students.height === 185);
  console.log(result.name);
}

//2. 나이가 20살 이상인 학생들 찾기
{
  const result = students.filter((students) => students.age >= 20);
  const result1 = result.filter((students) => students.name);

  console.log(result);
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
  //const result = students.reduce((prev.age, curr.age) => prev.age + curr.age);
  //console.log(result);
}

//6. 남학생들의 평균 연령 구하기
{
  const male = students.filter((students) => students.gender === "male");
  console.log(male);
}

//7. 야학생들만 따로 추출해서 새로운 배열 만들기
{
  const female = students.filter((students) => students.gender === "female");
  console.log(female);
}

//8. 여학생들 중 나이가 가장 어린 학생 찾기
{
  let female = students.filter((students) => students.gender === "female");
  const result = female.sort((a, b) => b - a);

  console.log(female[0]);
}
