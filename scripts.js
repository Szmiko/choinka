var h = prompt ('Podaj wysokośc choinki');
var star = '';

if (h <= 0 ) {
	console.log('Choinka nie istnieje');
	alert('Choinka nie istnieje');
}

function drawTree(h) {
	for (var i = 0; i <= h; i++) {
		star = '';
		for (var j = 0; j <= i; j++) {
			star += '*';
			if (j = i) {
				break;
			}
		}
		console.log(star);
	}
}