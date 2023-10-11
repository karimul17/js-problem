function leapYear (year){
    const remainder = year % 4;
    if ( remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear =leapYear(1950)
console.log(myYear);
const herYear = leapYear(1952);
console.log(herYear);