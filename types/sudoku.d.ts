import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

declare namespace Sudoku {
    export interface SudokuModeType {
        id: string;
        difficulty: Difficulty;
    }
}
