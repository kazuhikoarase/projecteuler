solve(function() {
	
	var table = [];
	for (var i = 0; i < 10; i += 1) {
		table.push(Math.pow(i, 5) );
	}
	
	var limit = table[9];
	var sum = 0;
	
	var next = function(sum1, sum2, start) {
		for (var i = start; i < 10; i += 1) {
			var _sum1 = sum1 + table[i];
			var _sum2 = (sum2 << 3) + (sum2 << 1) + i;
			if (_sum1 > 1 && _sum1 == _sum2) {
				//println(_sum1);
				sum += _sum1;
			}
			if (_sum2 < limit) {
				next(_sum1, _sum2, 0);
			}
		}
	};
	
	next(0, 0, 1);

	println(sum);
	assertEquals(443839, sum);

});
	