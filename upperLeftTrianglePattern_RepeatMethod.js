//Upper left triangle pattern using repeat method

function pattern(n){
    for (let i = 1; i <= n; i++) { 
        let str = "* "; 
        console.log(str.repeat(i));
    }
}

pattern(5);