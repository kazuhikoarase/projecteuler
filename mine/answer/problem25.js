solve(function() {
	var getDigit = function(s, digit) {
		var i = s.length - 1 - digit;
		return i >= 0? +s.charAt(i) : 0;
	}
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
	
	var a = '1';
	var b = '1';
	var i = 3;
	var fib;
	
	while (true) {
		fib = add(a, b);
		if (fib.length == 1000) {
			break;
		}
		if (i % 2 == 0) {
			a = fib;
		} else {
			b = fib;
		}
		i += 1;
	}
	
	println(i);
	assertEquals(4782, i);
});
	