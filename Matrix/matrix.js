const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

function printInSnakePattern(arr) {
	for(let i = 0 ; i < arr.length; i += 1) {
		const array = arr[i];
		if( i % 2 === 0) {
			for (let j = 0; j < array.length; j += 1) {
				console.log(arr[i][j]);
				if (j === array.length - 1) {
					console.log('*********');
				}
			}
		} else {
			for (let j = array.length - 1; j >= 0; j -= 1) {
				console.log(arr[i][j]);
				if (j === 0) {
					console.log('*********');
				}
			}
		}
	}
}

// [1, 2, 3, 4]
// [5, 6, 7, 8]
// [9, 10, 11, 12]

// [1, 5, 9]
// [2, 6. 10]
// [3, 7, 11]
// [4, 8, 12]

// With Extra Space
function transpose(array) {
	const transpose = [];
	for(let column = 0; column < array[0].length; column += 1) {
		const singleArray = [];
		for(let row = 0; row < array.length; row += 1) {
			singleArray.push(array[row][column]);
		}
		transpose.push(singleArray);
	}
	console.log('transpose --->', transpose);
}

// Without Extra Space -> will work for n * n matrices
function transposeOptimized(array) {
	for(let row = 0; row < array.length; row += 1) {
		for(let column = row + 1; column < array[row].length; column += 1) {
			const temp = array[row][column];
			array[row][column] = array[column][row];
			array[column][row] = temp;
		}
	}
	console.log('transpose --->', array);
}


// Rotate Matrix by Anti-ClockWise

/*
1. Take transpose of the matrix
2. Rotate the columns
*/

// Rotate Matrix by ClockWise

/*
1. Take transpose of the matrix
2. Rotate the rows
*/



function boundaryTraversal(array) {
	if (array.length === 1) {
		for(let column = 0; column < array[0].length; column += 1) {
			console.log(array[0][column]);
		}
	} else if (array[0].length === 1) {
		for(let row = 0; row < array.length; row += 1) {
			console.log(array[row][array[row].length - 1]);
	    }
	} else {
		for(let column = 0; column < array[0].length; column += 1) {
			console.log(array[0][column]);
		}
		console.log('************');
		for(let row = 1; row < array.length; row += 1) {
			console.log(array[row][array[row].length - 1]);
		}
		console.log('************');
		for(let column = array[0].length - 2; column >= 0; column -= 1) {
			console.log(array[array.length - 1][column]);
		}
		console.log('************');
		for(let row = array.length - 2; row >= 1; row -= 1) {
			console.log(array[row][0]);
		}
		console.log('************');
	}
}

// How to calculate the time complexity of this function ????
function searchInRowAndColumnSortedMatrix(arr, search) {
	let i = 0;
	let j = arr[0].length;
	while (i < arr.length && j >= 0) {
		const element = arr[i][j];
		if(element === search) {
			return [i,j];
		}
		else if(element < search) {
			i += 1;
		} else {
			j -= 1;
		}
	}
	return -1;
}


const arrayToBeTransposed = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log('index ----->', searchInRowAndColumnSortedMatrix(arrayToBeTransposed, 7));
boundaryTraversal(arrayToBeTransposed);
transposeOptimized(arr);
// printInSnakePattern(arr);