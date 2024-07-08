// 6가지의 요소 조작 메서드

//push: 배열 맨 뒤에 새로운 요소 추가 메서드
// 변환된 배열의 길이 반환
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6);

// console.log(newLength);

//pop: 배열 맨 뒤에 요소 제거 메소드
//삭제된 요소 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

// console.log(popedItem);

//shift: 배열 맨 앞의 요소 제거 메소드
//삭제된 요소 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem);

//unshift: 배열 맨 앞에 새로운 요소 추가 메서드
// 변환된 배열의 길이 반환
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0);

// console.log(unshiftedItem);

//slice: 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// console.log(sliced, sliced2, sliced3);

//concat: 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
