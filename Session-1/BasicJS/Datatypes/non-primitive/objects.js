//OBJECTS---->collection of values that are key-value pairs

//structure of an object



//  const object = {
// [values that are below like:object declaration]
 //     key:value
 // }

const student = {
    name: "mim",
    age: 20,
    isEnrolled: true,
    cgpa:3.5,
}

student["age"]=student["age"] + 1; //updating object value


//accessing object values
console.log(student);
console.log(student.name);
console.log(student["name"]); //alternative way to access object values