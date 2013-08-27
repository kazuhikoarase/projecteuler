solve(function() {
	var getDigit = function(s, digit) {
		var i = s.length - 1 - digit;
		return i >= 0? +s.charAt(i) : 0;
	};
	var add = function(a, b) {
		var carry = 0;
		var sum = '';
		var len = Math.max(a.length, b.length);
		for (var i = 0; i < len; i += 1) {
			var s = getDigit(a, i) + getDigit(b, i) + carry;
			sum = (s % 10) + sum;
			carry = Math.floor(s / 10);
		}
		if (carry > 0) {
			sum = carry + sum;
		}
		return sum;
	};
	var multiply = function(a, b) {
		var n = +b;
		var sum = '0';
		for (var i = 0; i < n; i += 1) {
			sum = add(sum, a);
		}
		return sum;
	};
	var fact = function(n) {
		var f = '1';
		for (var i = 2; i <= n; i += 1) {
			f = multiply(f, '' + i);
		}
		return f;
	};

	var f = fact(100);
	var sum = 0;
	for (var i = 0; i < f.length; i += 1) {
		sum += +f.charAt(i);
	}
	
	println(sum);
	assertEquals(648, sum);
});
	