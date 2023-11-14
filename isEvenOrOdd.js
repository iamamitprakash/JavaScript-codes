function isEvenOrOdd(num){//create a functions
    if(num % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log (isEvenOrOdd(34));//and called it anywhere in the program
let x= 34, y = 543, z = 561;
console.log("X is", isEvenOrOdd(x));
console.log("Y is", isEvenOrOdd(y));
console.log("Z is", isEvenOrOdd(z));