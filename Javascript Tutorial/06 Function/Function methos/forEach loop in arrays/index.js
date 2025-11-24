let arr = [1, 2, 3, 4, 5]
arr = ["Rampurhat", "Suri", "Bulpur", "shaithia"]
arr.forEach(function printval(val) {
    console.log(val)
})


//arrow function      value -> item , idx -> position , 
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr)
})