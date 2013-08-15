solve(function() {

	var solve = function(n) {
		var a = 1;
		var b = 1;
		for (var i = 0; i < n; i += 1) {
			a *= (i + 1);
			b *= (n + i + 1);
		}
		return b / a;
	};
	
	var ans = solve(20);

	println(ans);
	assertEquals(137846528820, ans);
});
	