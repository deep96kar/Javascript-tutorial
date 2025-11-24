function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data2");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching data1....");
// let promise = asyncFunc();    //hard way
// promise.then((res) => {
//   console.log(res);
//   console.log("fetching data2....");
//   let promise1 = asyncFunc1();
//   promise1.then((res) => {
//     console.log(res);
//   });
// });

console.log("fetching data1....");
asyncFunc().then((res) => {       //esay way
  console.log(res);
  console.log("fetching data2....");
  asyncFunc1().then((res) => {
    console.log(res);
  });
});
