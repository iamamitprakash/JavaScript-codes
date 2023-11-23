function invertedPyramidPattern(n){
    for(let i = n; i >= 1; i -= 1){
        let str = "*";
        let space = " ";
        console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
    }
}

invertedPyramidPattern(5);