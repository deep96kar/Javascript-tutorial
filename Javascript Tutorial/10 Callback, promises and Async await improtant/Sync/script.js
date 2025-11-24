// sync
// console.log("Sync")
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")

// Async
console.log("Async");
console.log("one");
console.log("two");

setTimeout(() => {
  console.log("hello");
  console.log("second program is complete");
}, 4000); //4s -> 4000ms timeout
// ei function ta 4s por console.log hobe se karone er jono keo dara be na

console.log("three");
console.log("four");
console.log("first program is complete");
