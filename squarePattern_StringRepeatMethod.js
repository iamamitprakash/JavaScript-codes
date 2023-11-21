// Function for printing square pattern using string repeat() method.
function printSquare(n) { 
    const row = "* ".repeat(n); 
    // For loop 
    for (let i = 0; i < size; i++) { 
        console.log(row); 
    } 
} 
let size = 5; 
// Calling function printSquare 
printSquare(size);

//Time complexity: O(N)
//Space complexity: O(1)