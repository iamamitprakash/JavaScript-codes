function hollowTrianglePattern(n){
    let str = "";
    for(let i = 0; i <= n; i++){
        for(let j = 0; j < i; j++){
            if(i === n){
                str += "*";
            }else{
                if(j == 0 || j == i-1){
                    str += "*";
                }else{
                    str += " ";
                }
            }
        }
        str += "\n";
    }
    console.log(str);
}

hollowTrianglePattern(6);