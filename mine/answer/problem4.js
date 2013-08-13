solve(function() {
	
	var isPalindromic = function(n) {
		n = '' + n;
		var start = 0;
		var end = n.length - 1;
		while (start < end) {
			if (n.charAt(start) != n.charAt(end) ) {
				return false;
			}
			start += 1;
			end -= 1;
		}
		return true;
	};
	
	var maxP = 0;
	for (var i = 999; i >= 100; i -= 1) {
		for (var j = i; j >= 100; j -= 1) {
			var n = i * j;
			if (n <= maxP) {
				// speed up!
				break;
			}
			if (isPalindromic(n) ) {
				maxP = Math.max(maxP, n);
				break;
			}
		}
	}
	
	println(maxP);
	assertEquals(906609, maxP);
});
	