function leftInvertedPyramidPattern(n){
    for(let i = 1; i <= n; i += 1){
        let str = "*";
        let space = " ";
        console.log(space.repeat((n - i)) + str.repeat(i));
    }
    for(let j = n -1; j >= 1; j -= 1){
        let str1 = "*";
        let space1 = " ";
        console.log(space1.repeat(n-j) + str1.repeat(j));
    }
}
leftInvertedPyramidPattern(5);