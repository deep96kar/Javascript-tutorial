async function hello() {
  console.log("hello");
}

hello()
console.log(hello());

function API() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("welcome to my page");
      resolve(200);
    }, 2000);
  });
}

async function api() {
  await API(); //1st
  await API(); //snd
};

console.log(api())






