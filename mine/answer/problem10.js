solve(function() {
	
	var max = 2000000;
	
	var a = [];
	for (var i = 0; i < max; i += 1) {
		a.push(0);
	}
	
	var sum = 0;
	for (var i = 2; i < max; i += 1) {
		if (a[i] === 0) {
			for (var n = i; n < max; n += i) {
				a[n] = 1;
			}
			sum += i;
		}
	}

	println(sum);
	assertEquals(142913828922, sum);
});
	