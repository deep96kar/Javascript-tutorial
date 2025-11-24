let arr = [1, 2, 3, 4]

let output = arr.reduce((res, curr) => {
    // return res+curr
    return res > curr ? res : curr;
})

console.log(output)