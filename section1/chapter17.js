// 1.배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴(대부분 사용)

let arrC = [1, 3, 2];

//2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";
arrC[2] = "hi";
console.log(arrC);
arrC[5] = "hiiii";
console.log(arrC[1]);
