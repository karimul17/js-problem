function milesToMeter (miles){
    const kilometer = miles * 1.609;
    return kilometer;
}
const miles = 41;
const meter = milesToMeter(miles);
console.log(meter);