function sieveOfEratosthenes(n){
    const primes = []
    // add all the numbers in the range (2 to n) in the  primes array
    for (let i = 2; i <= n + 1; i++){
        primes.push(i)
    }
    // removing the composite numbers 
    for (let j = 0; j <= primes.length; j++){
        for (let k = primes.length; k >= 1; k--){
            if (primes[k] % primes[j] == 0){
            primes.splice(k, 1)
        }
        
        }
    }
    return primes
}