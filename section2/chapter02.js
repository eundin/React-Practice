function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 1;
}

console.log(returnTrue() && returnFalse());
console.log(returnTrue() || returnFalse());

//<단락 평가 활용 사례>

// function printName(person) {
//   console.log(person && person.name);
// }

function printName(person) {
  let name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });