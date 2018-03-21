var h = prompt ('Podaj wysokośc choinki');

if (h <= 0 ) {
	console.log('Choinka nie istnieje');
	alert('Choinka nie istnieje');
}

function drawTree(h) {
	for (var n = 0; n <= h; n++) {
		var star = '';
		for (var j = 0; j <= n; j++) {
			star += '*';
		}
		console.log(star);
	}
}