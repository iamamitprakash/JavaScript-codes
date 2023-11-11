/*Given an array of three numbers. You need to find the largest among the three
numbers.*/
function largestAmongThree(a, b, c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
}
console.log(largestAmongThree(34, 23, 54), "is the greatest among the three.");