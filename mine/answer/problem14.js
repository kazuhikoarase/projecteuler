solve(function() {
	var cache = {};
	var collatz = function(n) {
		var seq = 0;
		while (n != 1) {
			//n ¨ n/2 (n is even)
			//n ¨ 3n + 1 (n is odd)
			if (n % 2 == 0) {
				n >>>= 1;
			} else {
				n = 3 * n + 1;
			}
			seq += 1;
		}
		return seq;
	}
	var max = 0;
	var maxN = 0;
	for (var n = 1; n < 1000000; n += 1) {
		var c = collatz(n);
		if (c > max) {
			maxN = n;
			max = c;
		}
	} 
	println(maxN);
});
	