/*Given three numbers. Your task is to check the order of three numbers. If they
are in increasing order, print “Increasing order”. If they are in decreasing order, print
“Decreasing Order” else print “neither increasing nor decreasing order”*/
function checkOrder(a, b, c){//here is a function created
    if(a > b && b > c){
        console.log("Decreasing Order");
    }else if(a < b && b < c){
        console.log("Increasing Order");
    }else{
        console.log("It is neither Increasing nor Decreasing");
    }
}
checkOrder(34,73,12);