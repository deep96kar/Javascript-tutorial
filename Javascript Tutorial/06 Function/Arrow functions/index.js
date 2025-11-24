                                //   This is hard way
//sum function
function sum (a,b){
    return a+b
} 
let sum1 =sum(44,66)
console.log(sum1)

//multipal function 
function multipal (a,b){
    return a*b
} 
let multipal1 =multipal(10,10)
console.log(multipal1)


                                   //This is esay way
                                   
//This Arrow function (function variable)
//sum                                  
let arrowsum=(a,b)=>{
    return a+b
}
console.log(arrowsum(22,33))

//multipal
let arrowMultipal=(a,b)=>{
    return a*b
}
console.log(arrowMultipal(5,4))


let printDeep=()=>{//without input this  is work
    console.log("Deep karmakar")
}
console.log(printDeep())
