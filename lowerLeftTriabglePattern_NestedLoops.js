//Print Lower left triangle pattern using Nested loop
function lowerLeftTrianglePattern(n){
    for(let row = 1; row <= n; row++){
        let str = "";
        for(let col = 1; col <= n-row; col++){
            str += "* ";
        }
        console.log(str);
    }
}

lowerLeftTrianglePattern(8);