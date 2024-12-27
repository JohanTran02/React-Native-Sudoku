import { Difficulty } from "sudoku-gen/dist/types/difficulty.type"

declare global {
    interface SudokuModeType {
        id: string;
        difficulty: Difficulty;
    }
}
