let num =[85, 97, 44, 37, 76, 60]
let total =0

for(let val of num){
 total += val
}

let avg = total/num.length
console.log(`avg marks of the class = ${avg}`)