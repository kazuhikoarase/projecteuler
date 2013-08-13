solve(function() {

	var sum = 0;
	
	for (var i = 0; i < 1000; i += 1) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}

	println(sum);
	assertEquals(233168, sum);
});
	