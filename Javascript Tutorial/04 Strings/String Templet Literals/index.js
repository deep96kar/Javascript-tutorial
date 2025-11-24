//Templet Literals

let tl = `This is a templet literals`
console.log(tl)
console.log(typeof tl)

// Example
let obj = {
    item: "pen",
    price: 10,
}

console.log("the cost of", obj.item, "is", obj.price, "rupees"); //this is hard way

let output = `the cost of ${obj.item} is ${obj.price} rupees`; // this is esay way
console.log(output)


console.log("Deep\nKarmakar") // "\n" mean new line created
let a = "Deep\tKarmakar" // "\t mean tab/spaces"
a = "Deep\tKarmakar"
console.log(a)
console.log(a.length) //lenght output is 13 because \t not part in two word this is one word