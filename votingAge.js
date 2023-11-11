/*Given a number age. You need to find if that age is coming under voting age. Age
can be considered as the voting age if it is greater than 18.*/
function isVotingAge(age){
    if(age > 18)
    return "Eligible";
    else
    return "Not Eligible";
}
console.log(isVotingAge(23));