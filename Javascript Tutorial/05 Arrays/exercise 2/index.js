let prices = [250, 645, 300, 900, 50]
let total = 0
let sum = 0
//for of loop
for (let val of prices) {
    console.log(`value before offer ${total} = ${val}`);
    let offer = val / 10
    prices[total] = prices[total] - offer
    console.log(`value after offer = ${prices[total]}`)
    total++;
}

//for loop
let prices1 =[250,645,300,900,50]
for (let i = 0; i < prices1.length; i++) {
    let offer = prices1[i] / 10
    prices1[i] -= offer
}

console.log(prices1);
