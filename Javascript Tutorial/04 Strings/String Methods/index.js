// this is uppercase and lowercase
let str = "Deepkarmakar"
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// this is trim
let str1 = "             Deep   kar   makar                "
console.log(str1.trim()) // first and last spaces not allowed but middle words spaces allowed

// this is slice(start, end)
let num = "0123456"
console.log(num.slice(1, 5)) //first and last word/number not allowed

//this is concat
let str2 = "Deep";
let str3 = "karmakar";
let str4 = str2.concat(str3)
let str5 = str3.concat(str2)
console.log(str4)
console.log(str5)


// this is replace(searchval, newval)
let str6 = "DDeepp"
console.log(str6.replace("D","j"))
console.log(str6.replaceAll("D","j"))


// this is ChrtAt(idx)
let str7 = "Ilovejs"
console.log(str7.charAt(0))
console.log(str7.replace("I","D"))





