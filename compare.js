console.log("abc" == "abc");// return true as both side is equal to each other.

//with variable comparison
let x = "abc";
let y = "abc";
console.log(x == y);// return true as both side is equal to each other as per the value of the variable.

let z = String("abc"); // this is string
let a = new String("abc"); //and this string object
console.log(z);
console.log(a);

// comparison of these two variables
console.log(a == z);
// console.log(String("abc") == new String("abc"));
console.log(a == x);
// console.log(new String("abc") == "abc");
console.log(z == x);

//type of these variables
console.log(typeof x);
console.log(typeof a);
console.log(typeof z);