//Upper right triangle pattern using nested loop
function pattern(n){
    for(let row = 1; row <= n; row += 1){
        let str = "";
        let spaces = n - row;
        for(j = 1; j <= spaces; j +=1){
            str += " ";
        }
        let stars = row;
        for(let col = 1; col <= stars; col += 1){
            str += "*";
        }
        console.log(str);
    }
}
pattern(4);