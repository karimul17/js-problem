function fatorial (number){
    let result = 1;
    for (let i = 1; i <= number; i++)
    result = i * result;
return result;
}
const number = fatorial(10);
console.log(number);