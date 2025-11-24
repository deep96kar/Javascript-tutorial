function countvowles(str) {
    //Deep karmakar -> count=5
    let count = 0
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") 
        {
            count++;
        }
    }
    return count;
}
console.log("Total Vowles:-",countvowles("Deep karmakar"))


//Arrow function

let arrowvowles=(str)=>{
    let count = 0
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") 
        {
            count++;
        }
    }
    return count;
}

console.log("Total Vowles:-",arrowvowles("Deep"))
