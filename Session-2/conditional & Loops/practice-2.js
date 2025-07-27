// let a = 5;
// console.log(a);

let marks = prompt("Enter your marks:"); //prompt is used to take input from the user
// marks = parseInt(marks); // Convert the input to an integer

if (marks >= 80 && marks <= 100) {
  console.log("A Grade");
} else if (marks >= 70 && marks <= 89) {
  console.log("B Grade");
} else if (marks >= 60 && marks <= 69) {
  console.log("C Grade");
} else if (marks >= 50 && marks <= 59) {
  console.log("D Grade");
}
else {
    console.log('FAIL');
}
