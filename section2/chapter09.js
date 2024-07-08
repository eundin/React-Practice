//5가지 매열 변형 메서드

//filter: 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "감자", hobby: "테니스" },
  { name: "장은진", hobby: "게임" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

//map: 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapRes = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapRes);

let names = arr1.map((item) => item.name);
// console.log(names);

//sort: 배열을 사전순으로 정렬하는 메서드 (원본 배열 변경)
// 수는 정렬하지 못 해서 if문으로 조건을 설정해 줘야함

let arr3 = [10, 3, 5];

arr3.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(arr3);

//toSorted: 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(sorted);
// console.log(arr5);

//join: 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ["hi", "im", "din"];
const joined = arr6.join("-");
console.log(joined);
