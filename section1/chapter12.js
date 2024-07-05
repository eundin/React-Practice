// <함수는 변수에 담을 수 있다.>

//1. 함수 선언식
let varA = funcA;
varA(); //힘수 선언식은 호이스팅 된다.

function funcA() {
  console.log("hi");
}

//2. 함수 표현삭
// varB(); => 함수 표현식은 호이스팅 되지 않는다.

let varB = function funcB() {
  console.log("hihi");
};
// 함수 표현식은
// funcB(); 이런식으로 호출 불가.
// 따라서 아래와 같이 함수 명을 생략하고 씀. 이런 함수를 익명함수라고 부름.
let anonymousB = function () {
  console.log("hihi");
};

varB();
anonymousB();

// <화살표 함수>
let varC = () => {
  return 1;
};
console.log(varC());

//return만 하는 경우에는 {}를 생략할 수 있다.
let varCC = (value) => value + 2;
console.log(varCC(3));
