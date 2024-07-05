// <객체>
// 객체 생성에는 2가지 방법이 있음
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

//2. 객체 프로퍼티(객체 속성): 객체 안에 있는 값
let person = {
  name: "이정환",
  age: 27,
  extra: {},
  10: 20,
  "like cat": true,
};

//개수제한 없음. 어떠한 값이든 넣을 수 있음.
//키에는 ""띠옴표 안 붙임. but 키에 띄어쓰기가 있는 경우 따옴표 사용함.

//3. 객체 프로퍼티를 다루는 방법
//3-1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];

let property = "extra";
let extra = person[property];

//3-2 새로운 프로퍼티 추가
person.job = "FE developer";
person["favFood"] = "떡볶이";

console.log(person);

//3-3 프로퍼티 수정
person.job = "Educator";
person["favFood"] = "라면";

//3-4 프로퍼티 삭제
delete person.favFood;
delete person["age"];

console.log(person);

//3-5 프로퍼티 존재 유무 확인하기 (in 연산자)
let res1 = "name" in person;
let res2 = "age" in person;
console.log(res1);
console.log(res2);
