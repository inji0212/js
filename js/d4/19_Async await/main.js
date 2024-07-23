// async await
//promise 설탕을 첨가
// syntactic sugar 문법
// promis then을 사용하기 편하게 만듬

const getSunIcon = () =>
  new Promise((resolve, _) => {
    resolve("🌞");
  });

getSunIcon() //
  .then((sun) => console.log(sun));
//🌞
const getSunIcon2 = async () => "🌞";
// 무조건 resolve()

getSunIcon2() //
  .then((sun) => console.log(sun));

//🌞
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getSunIcon3 = async () => {
  // 비동기 처리가 필요
  // new promise
  // 비동기 기다릴 방법있어야함
  // return new Promis ((resolve)=>{
  //     setTimeout(() => {
  //         resolve("🌞");
  //     }, 1000);
  // });
  // 비동기 없으면
  // 비동기 처리하는 코드가 있다는건
  // 비동기 실행을 끝날때까지 기다려야한다는것
  await delay(1000);
  return "🌞";
};

getSunIcon3() //
  .then((sun) => console.log(sun));
//🌞
const getWaveIcon = async () => {
  await delay(1000);
  return "파도";
};

const getCloudIcon = async () => {
  await delay(1000);
  return "구름";
};

const getAllIcon = () => {
  return getSunIcon3().then((sun) => {
    return getWaveIcon().then((wave) => {
      return getCloudIcon().then((cloud) => {
        console.log(`${sun} ${wave} ${cloud}`);
      });
    });
  });
};
getAllIcon();
//🌞 파도 구름
//promise지옥

// await으로 해결가능

const getAllIcon2 = async () => {
  const sun = await getSunIcon3(); // resolve실행될때까지 기다렸다
  const wave = await getWaveIcon(); // resolve실행될때까지 기다렸다
  const cloud = await getCloudIcon(); // resolve실행될때까지 기다렸다
  console.log(`${sun} ${wave} ${cloud}`);
  // 출력하겠다
};

getAllIcon2();
//🌞 파도 구름

// await 단점 : 각 await을 하나씩 기다려서 오래걸린다.
const getAllIcon3 = async () => {
  Promise.all(
    (getSunIcon3, getWaveIcon(), getCloudIcon()).then((icons) => {
      //병렬처리
      //가장오래 걸린 것 시간만큼
      console.log(icons);
    })
  );
};

const icons = await Promise.all([getSunIcon3(), getWaveIcon(), getCloudIcon()]);

console.log(icon.join(","));
// 실패나면 전체 에러

const icons2 = await Promise.allSettled([
  getSunIcon3(),
  getWaveIcon(),
  getCloudIcon(),
]);

console.log(icon2.join(","));
// 객체형태로 성공한것만

//async는 await함수에만 가능
// fetch 는 아님 (이를 합친 느낌 )

fetch("https;//jsonplaceholder.typicode.com/todos/1")
  .then((Response) => Response.json())
  .then.apply((json) => console.log(json));

//=>
async function fetchTodo() {
  const res = await fetch("https;//jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  console.log(json);
}

fetchTodo();
