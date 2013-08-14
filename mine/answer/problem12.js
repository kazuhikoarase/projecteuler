solve(function() {
	var getNumDivisors = function(n) {
		var min = 1;
		var max = n;
		var count = (n > 1)? 2 : 1;
		while (min < max) {
			min += 1;
			if (n % min == 0) {
				max = n / min;
				if (min == max) {
					count += 1;
				} else if (min < max) {
					count += 2;
				} else {
					break;
				}
			}
		}
		return count;
	};

	var n = 1;
	var d = 2;
	while (getNumDivisors(n) <= 500) {
		n += d;
		d += 1;
	}
	
	println(n);
	assertEquals(76576500, n);
	
});
	