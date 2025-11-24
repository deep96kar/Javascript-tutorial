// then, catch
let final = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promises");
    resolve("success");
    // reject("some error");
  });
};

let promise = final();
promise.then((res) => {
  console.log("Promise fulfilled \n",res);
});

promise.catch((err)=>{
    console.log("rejected",err)
})