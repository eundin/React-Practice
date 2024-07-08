//Date 객체를 생성하는 방법
let date1 = new Date();
let date2 = new Date(1997, 1, 7, 23, 59, 59);
// console.log(date1, date2);

//타임 스탬프
let ts1 = date1.getTime();
// console.log(ts1);
let date4 = new Date(ts1);

// console.log(date1, date4);

//시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //js에서 월은 0부터 센다.

//시간 수정하기
date1.setFullYear(2024);
date1.setMonth(3); //4월임

//시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시간 제외한 날짜만 출력
console.log(date1.toLocaleString()); // 한국 형식으로 출력
