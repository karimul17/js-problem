function sumOfArry(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        sum = sum + element
        if (number % 2 !== 0) {
            // console.log(sum);
        }

    }
    return sum;
}




function getSumOfArry(number) {
    let sum = 0;
    const oddNumber = [];
    for (let i = 0; i < number.length; i++) {
        const index = i;
        const element = number[index];
        sum = sum + element
        if (number % 2 !== 0) {
            // console.log(sum);
            oddNumber.push(element);
        }

    }
    return oddNumber;
}
const myNumber = [59, 38, 356, 34, 73];
const oddNumbers = getSumOfArry(myNumber);
console.log(oddNumbers);
const oddNumberSum = sumOfArry(oddNumbers);
console.log("odd number sum", oddNumberSum);