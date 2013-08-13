solve(function() {
	
	var lcm = function(a, b) {
		if (a < 1 || b < 1) {
			throw a + ',' + b;
		}
		while (a != b) {
			if (a < b) {
				b -= a;
			} else {
				a -= b;
			}
		}
		return a;
	};
	
	/*
	var n = 1;
	for (var i = 1; i <= 10; i += 1) {
		if (n % i == 0) {
		} else {
			n *= (i / lcm(i, n) );
		}
	}
	println(n);
	 */
	
	var n = 1;
	for (var i = 1; i <= 20; i += 1) {
		if (n % i == 0) {
		} else {
			n *= (i / lcm(i, n) );
		}
	}

	println(n);
	assertEquals(232792560, n);
});
