import { Dispatch, SetStateAction, createContext } from "react"
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type"

interface SudokuBoardContextType {
    difficulty: Difficulty,
    setDifficulty: Dispatch<SetStateAction<Difficulty>>,
    board: string[][],
    setBoard: Dispatch<SetStateAction<string[][]>>,
    boardSolution: string[][],
}

export const SudokuBoardContext = createContext<SudokuBoardContextType>({} as SudokuBoardContextType)
