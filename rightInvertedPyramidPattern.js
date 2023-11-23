function rightInvertedPyramidPattern(n){
    for(let i = 1; i <= n; i ++){
        let str = "*";
        console.log(str.repeat(i));
    }
    for(let i = n - 1; i >= 1; i --){
        let str = "*";
        console.log(str.repeat(i));
    }
}

rightInvertedPyramidPattern(4);