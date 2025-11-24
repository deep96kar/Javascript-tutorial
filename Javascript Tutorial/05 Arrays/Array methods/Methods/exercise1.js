let company1 =["Bloomberg", "Microsoft","uber","google","IBM","Netflix"] //Remove the first company from the array
company1.shift(0)
console.log(company1)

let company2 =["Bloomberg", "Microsoft","uber","google","IBM","Netflix"]//Remove uber & add Ola in its place
company2.splice(2,1,"Ola")
console.log(company2)

let company3 =["Bloomberg", "Microsoft","uber","google","IBM","Netflix"]//Add Amazon at the end
company3.push("Amazon")
console.log(company3)