import { SudokuBoardContext } from "@/context/SudokuBoardContext";
import { createBoard, generatePuzzle } from "@/features/sudoku";
import { ReactNode, useEffect, useState } from "react";
import { getSudoku } from "sudoku-gen";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

export const SudokuBoardProvider = ({ children }: { children: ReactNode }) => {
    const [difficulty, setDifficulty] = useState<Difficulty>("easy")
    const [board, setBoard] = useState<string[][]>(createBoard());
    const [boardSolution, setBoardSolution] = useState<string[][]>(createBoard());

    useEffect(() => {
        const sudoku = getSudoku(difficulty);
        setBoard(generatePuzzle(sudoku.puzzle));
        setBoardSolution(generatePuzzle(sudoku.solution))
    }, [difficulty])

    return (
        <>
            <SudokuBoardContext.Provider value={{ difficulty, setDifficulty, board, setBoard, boardSolution }}>
                {children}
            </SudokuBoardContext.Provider>
        </>
    )
}