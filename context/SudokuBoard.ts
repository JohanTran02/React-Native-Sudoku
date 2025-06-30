import { Dispatch, SetStateAction, createContext } from "react"
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type"

export interface SudokuBoardContextType {
    difficulty: Difficulty,
    setDifficulty: Dispatch<SetStateAction<Difficulty>>,
    board: string[][],
    setBoard: Dispatch<SetStateAction<string[][]>>,
    boardSolution: string[][],
    initiateSudoku: (difficulty: Difficulty) => void;
}

export const SudokuBoardContext = createContext<SudokuBoardContextType>({} as SudokuBoardContextType)
