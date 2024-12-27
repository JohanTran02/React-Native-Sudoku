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

export { checkSolution, generatePuzzle, createBoard, }