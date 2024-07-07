//<Falsy한 값>
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

//<Truthy한 값>
// 7가지 Falsy한 값을 제외한 나머지 모든 값

//<활용사럐>
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);
