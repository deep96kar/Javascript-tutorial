let arr = [1, 2, 3, 4, 5, 6, 8, 4, 94, 55]

let even=arr.filter((val) => {
    return val % 2 === 0
})

console.log(even)