function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// promise.then((res) => {
//   console.log(res);
// });

// promise.catch((res) => {
//   console.log(res);
// });

//프로미스 체이닝
// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

add10(0)
  .then((res) => {
    console.log(res);
    const newP = add10(res);
    return newP;
  })
  .then((res) => {
    console.log(res);
  });
