function getAverage(assignment1, assignment2, assignment3){
    var total = assignment1 + assignment2 + assignment3;
    var average = total / 3;
    return average;
}
var assignment1 = [50, 30] ;
var totalAssignment1 = 50 + 30;
var assignment2 = 59;
var assignment3 = 58;
var mark = getAverage( totalAssignment1, assignment2, assignment3)
console.log("get average",mark);