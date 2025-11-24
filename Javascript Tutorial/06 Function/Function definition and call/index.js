function myfunction() {
    console.log("Deep")
    console.log("Deep karmakar")
}
myfunction()
myfunction()


function str(name){
    console.log("welcome " + name + " world")
    console.log("welcome " + name + " world")
} 
str("Deep")


function myfunction1(name/*parameter -> input*/) {
    console.log(name)
}
myfunction1("I love javascript,100")//argument


//function 2 number and sum

function sum(x, y) {
    console.log(x + y)
    return sum
    console.log("Deep karmakar") // this line will not work because the return value is the last line of this block.
}

//console.log(x) function parameter -> like local variable of function -> block scope

let val = sum(22, 66)
console.log(val)

