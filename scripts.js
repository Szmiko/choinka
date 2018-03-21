var h = prompt ('Podaj wysokośc choinki');

if (h <= 0 ) {
	console.log('Choinka nie istnieje');
	alert('Choinka nie istnieje');
}

function drawTree(h) {
	for (var i = 0; i <= h; i++) {
		var star = '';
		for (var j = 0; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}