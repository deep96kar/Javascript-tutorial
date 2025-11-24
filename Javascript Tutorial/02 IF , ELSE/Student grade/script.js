let score = prompt("Enter your score")
// // let score = 95;

if (score >= 90 && score <= 100) {
    console.log(score, "Your grade is 'A'")
}
else if (score >= 70 && score <= 89) {
    console.log(score, "Your grade is 'B'")
}
else if (score >= 60 && score <= 69) {
    console.log(score, "Your grade is 'C'")
}
else if (score >= 50 && score <= 59) {
    console.log(score, "Your grade is 'D'")
}
else if (score >= 33 && score <= 49) {
    console.log(score, "Your grade is 'F'")
}
else {
    console.log(score, "your are fail")
}



