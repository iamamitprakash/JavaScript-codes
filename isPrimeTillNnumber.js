//javascript program to diusplay prime number till N

//function to check if a given number is prime
function isPrime(n){
    //since 0 and 1 is not a prime number hence return false
    if(n == 0 || n == 1) return false;
    //Run a loop from 2 to n-1
    for(let i = 2; i <= n-1; i += 1){
        //if the number is divisible by i, then n is not a prime number.
        if(n % i == 0) return false;
    }
    //otherwise n is prime number
    return true;
}
let N = 50;
//check for every number from 1 to N
for(let i = 1; i <= N; i += 1){
    //check if current number is prime
    if(isPrime(i)){
        console.log(i);
    }
}