/*Given a number as a score of the
student. You need to assign the grade to the student
based on the score*/
let score = 45;
if(score >= 90){
    grade = 'A';
}else if(score >=80 && score < 90){
    grade = 'B';
}else if(score >=60 && score < 80){
    grade = 'C';
}else if(score >= 33 && score < 60){
    grade = 'D';
}else{
    grade = 'F';
}
console.log(grade);