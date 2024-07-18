/* this */
//this-> 자신을 호출한 객체를 가리키는 특수한 키워드
//this는 특성상 함수안에서 사용
console.log(this);

// 지금이 콘솔의 this는 window 객체가 나온다.
// this가 가리킬 수 있는 가장 최상위 객체

//객체
// 키와 값으로 이루어진 속성들의 집합
const membership = {
  name: "김기수",

  // 매서드(매소드)
  //객체에 키로 함수가 있을경우
  joined: function () {
    console.log(this);
    //this : 김기수 님이 가입했습니다.

    return `${this.name}님이 가입했습니다.`;
  },
};
//김기수님이 가입했습니다.

console.log(membership.joined());

function member() {
  console.log(this);
}

// window.member();
//window에 member함수가 있어서

membership.joined();
// name~값이 나온다
const joined = membership.joined;
joined();
//window 값이 나온다.

//화살표함수는 this를 사용가능은 하나 사용은안한다.
const membership1 = {
  name: "김기수",

  // 매서드(매소드)
  //객체에 키로 함수가 있을경우
  joined: function () {
    console.log(this);
    //this : 수코딩님이 가입했습니다.

    return `${this.name}님이 가입했습니다.`;
  }.bind({ name: "수코딩" }),
};
//수코딩님이 가입했습니다.

console.log(membership1.joined());

member.bind({ name: "수코딩" })();
//{ name: '수코딩' }
//() 안하면 콘솔안됨

//joined(){} = joined: function(){}
