//Print square pattern using array and join methods
function printSquare(n) { 
    const rowArray = Array(n).fill('*'); 
    for (let i = 0; i < size; i++) { 
        console.log(rowArray.join(' ')); 
    } 
} 
  
// Calling fucntion 
let size = 5; 
printSquare(size);

//Time complexity: O(N)
//Space complexity: O(1)