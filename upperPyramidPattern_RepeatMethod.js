function upperPyramidPattern(n){
    for(let i = 1; i <= n; i +=1){
        let str = "*";
        let space = " ";
        console.log(space.repeat((n - i)) + str.repeat(i * 2 -1));
    }
}

upperPyramidPattern(6);