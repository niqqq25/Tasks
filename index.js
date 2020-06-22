const validGrid = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const invalidGrid = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

console.log(validSolution(validGrid));
console.log(validSolution(invalidGrid));

function validSolution(grid) {
    const gridLength = grid[0].length;
    let isValid = true;

    //just to be sure
    if (gridLength !== grid.length || gridLength % 3) {
        return "Wrong grid";
    }

    //validate row
    grid.forEach((row) => {
        row.reduce((acc, cur) => {
            if (acc.includes(cur) || cur > 9) {
                isValid = false;
            } else {
                acc.push(cur);
            }
            return acc;
        }, []);
    });

    // validate columns
    let tempArr;
    for (let col = 0; col < gridLength; col++) {
        tempArr = [];
        for (let row = 0; row < gridLength; row++) {
            if (tempArr.includes(grid[row][col])) {
                isValid = false;
            } else {
                tempArr.push(grid[row][col]);
            }
        }
    }

    // //check cube 3x3
    for (let row = 0; row < gridLength; row += 3) {
        for (let col = 0; col < gridLength; col += 3) {
            let tempArr = [];
            for (let y = row; y < row + 3; y++) {
                for (let x = col; x < col + 3; x++) {
                    if (tempArr.includes(grid[y][x])) {
                        isValid = false;
                    } else {
                        tempArr.push(grid[y][x]);
                    }
                }
            }
        }
    }

    return isValid;
}
