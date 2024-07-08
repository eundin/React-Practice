//5가지 요소 순회 및 탐색 메서드

//forEach: 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

//includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [2, 3, 4];
let isIncludes = arr2.includes(5);
// console.log(isIncludes);

//indexOf: 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 3, 4];
let index = arr3.indexOf(87);
let arr4 = [2, 2, 2];
let indexx = arr4.indexOf(2);

// console.log(index);
// console.log(indexx);

//findIndex: 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1, 2, 3];

const findedIndex = arr5.findIndex((item) => item === 99);
// console.log(findedIndex);

//indexOf를 두고 왜 findIndex를 쓰냐?
//indexOf는 얕은 비교로 동작함 => 따라서 참조값을 기준으로 비교를함(property기준으로 비교 못 함)
let objArr = [{ name: "이정환" }, { name: "살구" }];

// console.log(objArr.indexOf({ name: "이정환" }));
// console.log(objArr.findIndex((item) => item.name === "이정환"));

//find

const finded = objArr.find((item) => item.name === "이정환");
console.log(finded);
