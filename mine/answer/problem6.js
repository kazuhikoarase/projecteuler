solve(function() {
	var n = 0;
	var sum = 0;
	for (var i = 1; i <= 100; i += 1) {
		sum += i * n;
		n += i;
	}
	sum *= 2;
	
	println(sum);
	assertEquals(25164150, sum);
});
	