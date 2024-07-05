// <콜백함수>
function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log(3);
}

function sub() {
  console.log("sub");
}

main(sub);

main(function () {
  console.log("anonymouse");
});

main(() => {
  console.log("arrow");
});

//<콜백함수의 활용>
function repeatDouble(count) {
  for (let i = 1; i <= count; i++) {
    console.log(i * 2);
  }
}

function repeatTriple(count) {
  for (let i = 1; i <= count; i++) {
    console.log(i * 3);
  }
}

repeatDouble(5);
repeatTriple(5);
// 이렇게 구조가 거의 유사한 경우에는 아래와 같이 콜백함수를 사용한다.

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, (i) => {
  console.log(i * 2);
});

repeat(5, function (i) {
  console.log(i * 3);
});
