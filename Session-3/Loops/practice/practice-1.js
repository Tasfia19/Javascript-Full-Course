//print even number from 0 to 100

let i = 2;

for (i = 2; i <= 100; i++){
    if (i % 2 == 0) {
        //console.log("even number:", i);// Using console.log directly
      console.log(`Even number: ${i}`); // Using template literals for better readability
    }
}