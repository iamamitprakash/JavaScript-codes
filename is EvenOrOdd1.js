//Print all N numbers with identification of even or odd
function isEvenOrOdd1(num){
    if(num % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(isEvenOrOdd1(50));
for(i = 1; i <= 50; i += 1){
    console.log(i, "is", isEvenOrOdd1(i));
}