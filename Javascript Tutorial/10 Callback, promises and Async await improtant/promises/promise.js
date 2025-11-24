// let final = new Promise((resolve, reject) => {
//   console.log("i am a promises");
// //   resolve("success");
//   reject("some error");
// });

// console.log(final);

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      console.log(promise)
      // reject("some error")
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

let promise=getData(123)
console.log(promise)


