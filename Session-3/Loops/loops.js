//for loop

// for (let i = 1; i <= 5; i++){
//     console.log("values:", i);
// }


//while loop
// let i = 1;
// while (i <= 5) {
//     console.log("values:", i);
//     i++;
// }


// //do-while
// let i=2
// do {
//     console.log("values:", i);
//     i++;
// }
// while(i<=5)

// //for of loop //used for only array & strings not for objects
// let str = "tasfia"

// let size = 0;
// for (let i of str) {

//     console.log("i:", i); // prints each character in the string
// // console.log("index:", str.indexOf(i)); // prints the index of each character 
//     size++;
// }
// console.log("size:", size);


//for in loop //used for objects
let student = {
    name: "Tasfia",
    age: 20,
    city: "Dhaka"
}
for (let i in student) {
    // console.log("key:", i, "value:", student[i]); // prints each key and its corresponding value in the object
    //  console.log("value:", student[i]); // prints the value of each key in the object
    // console.log("index:", i); // prints the index (key) of each value
    // console.log("student:",i, student[i]);
}