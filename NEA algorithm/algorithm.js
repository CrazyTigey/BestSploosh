function generateSquare() {
    let square = [];
    for (let i = 0; i < 6; i++) {
        square[i] = [];
        for (let j = 0; j < 6; j++) {
            square[i][j] = ' ';
        }
    }
    for (let i = 0; i < 20; i++) {
        let row = Math.floor(Math.random() * 6);
        let col = Math.floor(Math.random() * 6);
        square[row][col] = 'W';
    }
    return square;
}

function printSquare(square) {
    for (let i = 0; i < square.length; i++) {
        let row = square[i];
        let rowStr = '';
        for (let j = 0; j < row.length; j++) {
            rowStr += row[j];
        }
        document.write(rowStr + "<br>");
    }
}

let square = generateSquare();
printSquare(square);
document.write("Finished executing code");

console.log("done")