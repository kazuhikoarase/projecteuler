solve(function() {

	var flg = true;
	var a = 1;
	var b = 2;
	var c;
	
	var sum = b;

	while ( (c = a + b) < 4000000) {
		if (c % 2 == 0) {
			sum += c;
		}
		if (flg) {
			a = c;
		} else {
			b = c;
		}
		flg = !flg;
	}

	println(sum);
	assertEquals(4613732, sum);
});
	