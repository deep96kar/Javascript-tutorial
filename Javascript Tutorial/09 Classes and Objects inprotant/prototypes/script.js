let student = {
  name: "Deep karmakar",
  roll: "12",
  printRoll: function () {
    console.log("roll =", this.roll); // this means student
  },
};

// js objects have a special propety called prototype

console.log(student.roll);
console.log(student.printRoll());

const employee = {
  // 2 way to create objects
  calcTax() {
    console.log("tax rate is 10%");
  },

  //   calctax2: function () {
  //     console.log("tax rate is 10%");
  //   },
};

console.log(employee.calcTax());
console.log(employee);

const deep = {
  salary: 6500,
};

// we can set prototype using __proto__
deep.__proto__ = employee;

console.log(deep);
console.log(deep.calcTax());

const deep1 = {
  salary: 8500,
  calcTax() {
    console.log("tax rate is 20%");
  },
};

deep1.__proto__ = employee;  //employee er calcTax use korbe na karon deep1 er kache orr nijer clacTax ache 

console.log(deep1);
console.log(deep1.calcTax());

//if object & prototype have same meyhod object method will be used

