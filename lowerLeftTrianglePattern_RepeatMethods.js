//Lower left triangle pattern using repeat methods
function lowerLeftTrianglePattern(n){
    for(let i = n; i >= 1; i--){
        let str = "* ";
        console.log(str.repeat(i));
    }
}

lowerLeftTrianglePattern(6);