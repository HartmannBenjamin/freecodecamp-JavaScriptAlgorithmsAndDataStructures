function sumPrimes(num) {
  let result = 0;

  for(let i = 1; i <= num; i++) {
    let isPrime = true;

    for(let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      result += i;
    }
  }

  return result - 1;
}

console.log(sumPrimes(10));
