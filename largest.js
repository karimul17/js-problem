function maxNumber (number){
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
    const index = i;
   const element = number[index];
   if(element < largest){
    largest = element;
   }
}

return largest;
}
const myNumber = [48, 48, 490, 9, 49];
const total = maxNumber(myNumber);
console.log(total)