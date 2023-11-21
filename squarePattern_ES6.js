//Print square pattern using ES6 repeat and Template literals
let size = 5; 
const rowOfSquare = '* '.repeat(size); 
  
// Using template literal 
// \n is used for next line 
  
const square = `${rowOfSquare}\n`.repeat(size); 
  
// Printing square 
console.log(square);