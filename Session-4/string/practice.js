let str = prompt("enter your name:");

let cleanedStr = str.replace(/\s+/g, ""); // remove all spaces
console.log(`@${cleanedStr}${cleanedStr.length}`);

console.log("@"+str+str.length)