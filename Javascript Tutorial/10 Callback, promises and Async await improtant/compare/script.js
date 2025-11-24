function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      // reject("some error")
      resolve("success");
    }, 2000);
  });
}

//   This is Async-Await
async function getAllData() {
  console.log("getting data1.....");
  await getData(1);
  console.log("getting data2.....");
  await getData(2);
  console.log("getting data3.....");
  await getData(3);
  console.log("getting data4.....");
  await getData(4);
}

// this is called promise chain
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  }); 

//This is callback hell
getData(1, () => {
  console.log("getting data2....");
  getData(2, () => {
    console.log("getting data3....");
    getData(3, () => {
      console.log("getting data4....");
      getData(4);
    });
  });
});
