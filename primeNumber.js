function isPrime(x){
    for(let i = 2; i <= x-1; i += 1){//we found a number in range [2, x-1] which divides x. hence x is non prime
        if(x % i == 0){
            return false;
        }
    }
    //The loop completed but we didn't return false, that means no number in the range [2, x-1] can divide x. hence x is prime
    return true;
}
console.log(isPrime(19));
console.log(isPrime(194));
console.log(isPrime(139));
console.log(isPrime(1900));