// let number = 4;
// if (number >= 0){
//     console.log('positive');
// }
// else{
//     console.log('negative');
// }

// problem-2
// let number = 1;
// if ( number %2== 0 ){
//     console.log(number,'even number');
// }
// else{
//     console.log(number,'odd number');
// }

// problem-3

// let a =3;
// let b=5;
// if( a>b){
//     console.log(a,'a is great number');
// }
// else{
//     console.log(b,'b is gret number');
// }

// problem-4

// let a =5;
// let b=6;
// let c=3;
// (a>b && a>c) ? console.log(a,'a is great number') : (b>c && b>a) ? console.log(b,'b is great number') :  console.log(c,'c is great number');

// problem-5
// let latter = 'b'

// if (latter == 'a'|| latter ==  'e' || latter == 'i' || latter =='o' || latter == 'u') {
//     console.log(latter,'is vowel');
// }
// else{
//     console.log(latter,'consonant');
// }

// problem-6
// let month = 2;
// let year = 2000;

// if( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 9 || month ==12){
//     console.log('month of day : 31');
// }
// else if(month == 2) {
//     if( year % 4 == 0){
//         if(month == 2){
//             console.log('month of day : 29')
            
//         }
     
        
//     }
//     else{
//         console.log('month of day : 28')  
//     }
    

// }
// else{
//     console.log('month of day : 30');
// }
// problem-7


// let month = 1;

// switch (month) {
//     case 1 :
//         console.log('January month 31 days' );
        
//         break;
//     case 2:
//         console.log('February month 28 days' );
        
//         break;
//     case 3:
//         console.log('march month 31 days');
        
//         break;
//     case 4:
//         console.log('April month 30 days');
        
//         break;
//     case 5:
//         console.log('May month 31 days');
        
//         break;
//     case 6:
//         console.log('jun month 30 days');
        
//         break;
//     case 7:
//         console.log('July month 31 days');
        
//         break;
//     case 8:
//         console.log('August month 31 days');
        
//         break;
//     case 9:
//         console.log('September month 30 days');
        
//         break;
//     case 10:
//         console.log('October month 31 days');
        
//         break;
//     case 11:
//         console.log('November month 31 days');
        
//         break;
//     case 12:
//         console.log('December month 30 days');
        
//         break;

//     default :
//     console.log('invalid');
//         break;
// }

// problem-8
// let mark = 49;
// if (mark >= 80 && mark <= 100){
//     console.log('A+');
// }
// else if(mark>=70 && mark < 80){
//     console.log('A');

// }
// else if(mark>=60 && mark < 70){
//     console.log('B');
// }
// else if( mark>=50 && mark < 60){
//     console.log('B');
// }
// else if(mark>=40 && mark<50)
// console.log('C');
// else if(mark>=0 && mark <40)
// console.log('F');
// else{
//     console.log('invalid mark');
// }

// problem-9
// let unit = 150;
// if (unit>0 && unit <50){
//     let bill = unit * 0.5 +55;
//     console.log(bill, 'tk');
// }
// else if (unit>50 && unit <=100 ){
//     let bill = (unit-50) * 0.75 +25 +55;
//     console.log(bill,'tk');
// }
// else if (unit>100 && unit <=150 ){
//     let bill = (unit-100) * 1.20 +62.5 +55;
//     console.log(bill,'tk');
// }
// else if (unit>150 && unit <=200 ){
//     let bill = (unit-150) * 1.50 +177.5 +55;
//     console.log(bill,'tk');
// }
// else if(unit>200){
//     let bill =(unit-200)*2 +267.5+55;
//     console.log(bill,'tk');
// }
// else{
//     console.log('undefined');
// }