const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const primeNumbers = (num1, num2) => {
    let primes = [];
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const primNumberList = primeNumbers(3,15)
console.log(primNumberList);

