let a = 324;
if(a % 2 == 0){
    console.log(a, "is an Even Number");
}else{
    console.log(a, "is an Odd Number.");
}

//by function
function checkOddEven(x){
    if(x % 2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(checkOddEven(221));