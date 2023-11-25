//Print diamond pattern using repeat methods
function diamondPattern(n){
    for(let i = 1; i <= n; i++){
        let str = "*";
        let space = " ";
        console.log(space.repeat((n - i)) + str.repeat(i * 2 -1));
    }
    for(let i = n- 1; i >= 1; i--){
        let str = "*";
        let space = " ";
        console.log(space.repeat((n - i)) + str.repeat(i * 2 -1));
    }
}
diamondPattern(5);