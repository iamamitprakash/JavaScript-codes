//Print square pattern using nested loop
function printSquare(n) { 
    for (let row = 1; row <= n; row++) { 
        let str = ""; 
        for (let col = 1; col <= n; col++) { 
            str += "*  "; 
        } 
        console.log(str); 
    } 
} 
  
// Square pattern size variable 
let patternSize = 5; 
  
// Calling function for pattern printing  
printSquare(patternSize);

//Time complexity: O(N^2)
//Space complexity: O(1)