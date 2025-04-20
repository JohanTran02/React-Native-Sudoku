const generatePuzzle = (puzzle: string) => {
    const array: string[][] = createBoard();
    const sudokuArray = puzzle.split("")

    array.map((row, rowIndex) => {
        row.map((column, columnIndex) => {
            if (sudokuArray[rowIndex * 9 + columnIndex] !== "-") {
                return array[rowIndex][columnIndex] = sudokuArray[rowIndex * 9 + columnIndex];
            }
        })
    })

    return array;
}

const checkSolution = (rowIndex: number, columnIndex: number, boardSolution: string[][], number: string): boolean => {
    if (boardSolution[rowIndex][columnIndex] === number) return true;
    else return false;
}

const checkWin = (board: string[][]) => {
    const flatBoard = board.flatMap((row) =>
        row.map((cell) => {
            if (cell === "-") return 0;

            return parseInt(cell);
        }));

    const boardSum = flatBoard.reduce((total, value) => total + value); //Det totala värdet en sudokubräda har: 405

    return boardSum === 405;
}

const createBoard = () => {
    const board: string[][] = []
    for (let i = 0; i < 9; i++) {
        board.push([]);
        for (let j = 0; j < 9; j++) {
            board[i].push("-")
        }
    }
    return board;
}

export { checkSolution, generatePuzzle, createBoard, checkWin }