let a = 2;
let b = 43;
let c = 3;
if(a + b > c && a + c > b && c + b > a){
    console.log("Yes! I t is a triangle.");
}else{
    console.log("No! It is not a triangle.");
}


//through a function
function checkTriangle(x,y,z){
    if(x + y > z && x + z > y && y + z > x)
        return true;
    else
        return false;
}
console.log(checkTriangle(23,43,33));