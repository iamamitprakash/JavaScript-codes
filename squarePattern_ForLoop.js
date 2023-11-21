// Creating variable 
let str = ""; 
// Function for printing square star pattern using for loop
function square(n) { 
    // First loop for row 
    for (let row = 1; row <= n; row++) { 
        str += "*  "; 
    } 
    // Second loop for column 
    for (let col = 1; col <= n; col++) { 
        console.log(str); 
    } 
} 
  
let size = 5; 
// Calling function for printing pattern 
square(size);

//Time complexity: O(N)
//Space complexity: O(1)