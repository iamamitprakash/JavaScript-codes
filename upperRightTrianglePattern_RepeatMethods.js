function pattern(n){
    for(let i = 1; i <= n; i++){
        let str = "*";
        let space = " ";
        console.log(space.repeat((n-i))+str.repeat(i));
    }
}

pattern(4);