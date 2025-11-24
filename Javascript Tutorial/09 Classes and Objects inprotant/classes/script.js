class car {
  constructor(brand, milage) {
    console.log("creating New object");
    this.brand = brand;
    this.milage = milage;
  }
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

  //   setbrand(brand) {                     //constructor is same work
  //     this.brandname = brand;
  //   }
}

console.log(car);

let BMW = new car("BMW", 12);
console.log(BMW);
console.log(BMW.start());
console.log(BMW.stop());

let maruti = new car("maruti",30);
console.log(maruti);
console.log(maruti.start());
