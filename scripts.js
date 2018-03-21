var h = prompt ('Podaj wysokośc choinki');
var star = '';

if (h <= 0 ) {
	console.log('Choinka nie istnieje');
	alert('Choinka nie istnieje');
}

function drawTree(h) {
	for (var n = 0; n <= h; n++) {
		star += '*';
	}
	console.log(star);
}