var h = prompt ('Podaj wysokośc choinki');

if (h <= 0 ) {
	console.log('Choinka nie istnieje');
	alert('Choinka nie istnieje');
}

function drawTree(h) {
	for (var n = 0; n <= h; n++) {
		star = '';
		for (var j = 0; j <= n; j++) {
			star += '*';
			if (j == n) {
				break;
			}
		}
		console.log(star);
	}
	return star;
}
drawTree(h); //I have one question, we talk about it later.