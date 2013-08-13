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

	/*
	// test
	primeEnumerator(
		function(i) { println(i); },
		function(i) { return i <= 1000; }
	);
	*/
	
	var target = 600851475143;

	var maxPrime = -1;
	
	primeEnumerator(
		function(i) {
			while (target % i == 0) {
				maxPrime = i;
				target /= i;
			}
		},
		function(i) {
			return i <= target;
		}
	);

	println(maxPrime);
	assertEquals(6857, maxPrime);
});
	