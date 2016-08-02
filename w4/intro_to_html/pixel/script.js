function changeColor(e){
	var target = e.target;

	if (target.className == 'black'){
		target.className = 'white';
	} else {
		target.className = 'black';
	}
}
function createGrid (COLS, ROWS){
	var body = document.body;

	function createRow () {
		var row = document.createElement('div');

		body.appendChild(row);
		return row;
	}

	function createCols(row){
		for (var i = 0; i < COLS; i++){
			var newColumn = document.createElement('div');

			row.appendChild(newColumn);
		}
	}

	for (var i = 0; i < ROWS; i++){
		var newRow = createRow();

		createCols(newRow);
		body.appendChild(newRow);
	}
}

function gridListen(){
	var gridDivs = document.querySelectorAll('div div');

	for (var i in gridDivs) {
		var curr = gridDivs[i];

		curr.addEventListener('click', changeColor);
	}
}

// Make the grid
createGrid(10, 10);
// Make it listen
gridListen();
