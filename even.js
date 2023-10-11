function evenaNumber (number){
    even = number % 2;
    if(even === 0){
        return true ;
    }
    else{
        return false;
    }
}
const herNumber = evenaNumber(40);
console.log(herNumber)
const myNumber = evenaNumber (41);
console.log(myNumber);