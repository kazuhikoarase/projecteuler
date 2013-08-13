solve(function() {
	
	var a = 1;
	var b = 499;
	var ans = 0;
	
	while (a < b) {
		
		var c = 1000 - b - a;
		var cSq1 = c * c;
		var cSq2 = a * a + b * b;

		if (cSq1 > cSq2) {
			a += 1;
		} else if (cSq1 < cSq2) {
			b -= 1;
		} else {
			ans = a * b * c;
			break;
		}
	}
	
	println(ans);
	assertEquals(31875000, ans);
});
	