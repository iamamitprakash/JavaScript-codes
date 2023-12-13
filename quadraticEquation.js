//formulae: x = -b +-√b^2-4ac/2a
function quadraticEquation(a,b,c){
    let sqrtValue = Math.sqrt(b*b - 4*a*c);
    let root1 = (-b + sqrtValue)/ (2*a);
    let root2 = (-b - sqrtValue)/ (2*a);
    console.log(root1, root2);
}
quadraticEquation(2, 5, 3);

// with other methods

function solveQuadraticEquation(a, b, c) {
    // Calculate the discriminant
    var discriminant = b * b - 4 * a * c;

    // Check if the discriminant is negative, which means no real roots
    if (discriminant < 0) {
        return "No real roots";
    } else if (discriminant === 0) {
        // If discriminant is zero, there is one real root
        var root = -b / (2 * a);
        return [root];
    } else {
        // If discriminant is positive, there are two real roots
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    }
}

// Example usage:
var a = 2;
var b = -7;
var c = 3;

var roots = solveQuadraticEquation(a, b, c);
console.log("Roots:", roots);