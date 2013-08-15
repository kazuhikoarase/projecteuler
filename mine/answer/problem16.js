solve(function() {
	var x2 = function(n) {
		var c = 0;
		var s = '';
		for (var i = 0; i < n.length; i += 1) {
			var d = +n.charAt(n.length - i - 1);
			d = d * 2 + c;
			s = (d % 10) + s;
			c = Math.floor(d / 10);
		}
		if (c > 0) {
			s = c + s;
		}
		return s;
	};
	
	var pow = 1000;
	var n = '1';
	for (var i = 0; i < pow; i += 1) {
		n = x2(n);
	}
	
	var sum = 0;
	for (var i = 0; i < n.length; i += 1) {
		sum += +n.charAt(i);
	}
	
	println(sum);
	assertEquals(1366, sum);
});
	