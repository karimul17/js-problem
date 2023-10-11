primeFirstLoop : for(let outNumber = 2; outNumber <= 100; outNumber++){
    for(let innerNumber = 2; innerNumber < outNumber; innerNumber++){
        if (outNumber % innerNumber == 0){
            continue primeFirstLoop;
        }
    }
    console.log(outNumber,'is prime number');

} 






