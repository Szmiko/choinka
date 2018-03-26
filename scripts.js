var h = prompt ('Podaj wysokośc choinki');

if (h <= 0 ) {
	console.log('Choinka nie istnieje');
	alert('Choinka nie istnieje');
}

function drawTree(h) {
	for (var n = 1; n <= h; n++) {
		var star = '';
		for (var j = 1; j <= n; j++) {
			star += '*';
		}
		console.log(star);
	}
	return star;
}
drawTree(h); //I have one question, we talk about it later.