import { GameState } from '@/context/SudokuGameState';

const generatePuzzle = (puzzle: string) => {
    const array: string[][] = createBoard();
    const sudokuArray = puzzle.split('');

    array.map((row, rowIndex) => {
        row.map((column, columnIndex) => {
            if (sudokuArray[rowIndex * 9 + columnIndex] !== '-') {
                return array[rowIndex][columnIndex] = sudokuArray[rowIndex * 9 + columnIndex];
            }
        });
    });

    return array;
};

const checkSolution = (rowIndex: number, columnIndex: number, boardSolution: string[][], number: string): boolean => {
    if (boardSolution[rowIndex][columnIndex] === number) return true;
    return false;
};

const checkGameState = (board: string[][], chances: number): GameState => {
    if (chances <= 0) return 'lose';

    // Check for any empty cells
    for (const row of board) {
        if (row.includes('-')) return 'playing';
    }

    // All cells are filled, so it's a win
    return 'win';
};

const createBoard = () => {
    const board: string[][] = [];
    for (let i = 0; i < 9; i++) {
        board.push([]);
        for (let j = 0; j < 9; j++) {
            board[i].push('-');
        }
    }
    return board;
};

export { checkSolution, generatePuzzle, createBoard, checkGameState };
