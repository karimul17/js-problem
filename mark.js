let mark = -49;
if (mark >= 80 && mark <= 100){
    console.log('A+');
}
else if(mark>=70 && mark < 80){
    console.log('A');

}
else if(mark>=60 && mark < 70){
    console.log('B');
}
else if( mark>=50 && mark < 60){
    console.log('B');
}
else if(mark>=40 && mark<50)
console.log('C');
else if(mark>=0 && mark <40)
console.log('F');
else{
    console.log('invalid mark');
}

// 



let day = 5
let month = 1;
let year = 2001;

let leapYear = (year % 4 == 0) ? 29 :28;

switch (month) {
    case 1 :
        console.log('January month 31 days' );
        
        break;
    case 2:
        console.log('February month 28 days' );
        
        break;
    case 3:
        console.log('march month 31 days');
        
        break;
    case 4:
        console.log('April month 30 days');
        
        break;
    case 5:
        console.log('May month 31 days');
        
        break;
    case 6:
        console.log('jun month 30 days');
        
        break;
    case 7:
        console.log('July month 31 days');
        
        break;
    case 8:
        console.log('August month 31 days');
        
        break;
    case 9:
        console.log('September month 30 days');
        
        break;
    case 10:
        console.log('October month 31 days');
        
        break;
    case 11:
        console.log('November month 31 days');
        
        break;
    case 12:
        console.log('December month 30 days');
        
        break;

    default :
    console.log('invalid');
        break;
}
