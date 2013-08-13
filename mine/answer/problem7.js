solve(function() {
	var primeEnumerator = function(onPrime, morePrime) {
		var primes = [];
		var isPrime = function(num) {
			for (var i = 0; i < primes.length; i += 1) {
				if (num % primes[i] == 0) {
					return false;
				}
			}
			return true;
		};
		for (var i = 2; morePrime(i); i += 1) {
			if (!isPrime(i) ) {
				continue;
			}
			onPrime(i);
			primes.push(i);
		}
	};

	var prime = -1;
	var primeCount = 0;
	//var primeIndex = 6;
	var primeIndex = 10001;
	
	primeEnumerator(
		function(i) { prime = i; primeCount += 1; },
		function(i) { return primeCount < primeIndex; }
	);

	println(prime);
	assertEquals(104743, prime);
});
	