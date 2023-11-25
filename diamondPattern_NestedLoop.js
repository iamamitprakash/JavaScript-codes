function upperTriangle(n){
    for(let row = 1; row <= n; row += 1){
        let str = "";
        let space = n - row;
        for(j = 1; j <= space; j += 1){
            str += " ";
        }
        let stars = 2*row -1;
        for(let col = 1; col <= stars; col += 1){
            str += "*";
        }
        console.log(str);
    }
}
//upperTriangle(3);

function lowerTriangle(n){
    for(let row = 1; row <= n; row += 1){
        let str = "";
        let space = row;
        for(let j = 1; j <= space; j += 1){
            str += " ";
        }
        let stars = 2 * (n - row) - 1;
        for(let col = 1; col <= stars; col +=1){
            str += "*"
        }
        console.log(str);
    }
}

//lowerTriangle(4);

function diamondPattern(n){
    upperTriangle(n);
    lowerTriangle(n);
}

diamondPattern(4);