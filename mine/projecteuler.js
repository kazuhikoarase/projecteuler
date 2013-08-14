
var minNo = 1;
var maxNo = 20;

var println = function(msg) {
	document.write('' + msg);
	document.write('<br/>');
};

var assertEquals = function(expected, actual) {
	if (expected !== actual) {
		throw 'expected ' + expected + ' but ' + actual;
	}
};

var solve = function(main) {
	
	var limit = 50;
	
	document.write('<div class="answer">');
	var start = new Date().getTime();
	main();
	var end = new Date().getTime();
	document.write('</div>');

	var total = end - start;
	var styleClass = total >= limit? 'timeover' : '';
	document.write('<div class="');
	document.write(styleClass);
	document.write('">Time: ');
	document.write(total);
	document.write('ms</div>');
};

!function() {

	var projecteulerUrl = 'http://projecteuler.net/problem=';

	for (var i = maxNo; i >= minNo; i -= 1) {
		
		var title = 'Problem ' + i;
		var url = 'answer/problem' + i + '.js';

		document.write('<div class="problem">');
		
		document.write('<h3>');
		document.write('<a href="');
		document.write(projecteulerUrl);
		document.write(i);
		document.write('" target="_blank">');
		document.write(title);
		document.write('</a>');
		document.write('</h3>');

		document.write('<script type="text/javascript" src="');
		document.write(url);
		document.write('"></script>');

		document.write('</div>');
	}

}();
