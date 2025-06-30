import { SudokuBoardContext } from '@/context/SudokuBoard';
import { createBoard, generatePuzzle } from '@/features/sudoku';

import { ReactNode, useState } from 'react';
import { getSudoku } from 'sudoku-gen';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

export const SudokuBoardProvider = ({ children }: { children: ReactNode }) => {
    const [difficulty, setDifficulty] = useState<Difficulty>('easy');
    const [board, setBoard] = useState<string[][]>(createBoard());
    const [boardSolution, setBoardSolution] = useState<string[][]>(createBoard());

    const initiateSudoku = (difficulty: Difficulty) => {
        setDifficulty(difficulty);
        const sudoku = getSudoku(difficulty);
        setBoard(generatePuzzle(sudoku.puzzle));
        setBoardSolution(generatePuzzle(sudoku.solution));
    };

    return (
        <>
            <SudokuBoardContext.Provider value={{ difficulty, setDifficulty, board, setBoard, boardSolution, initiateSudoku }}>
                {children}
            </SudokuBoardContext.Provider>
        </>
    );
};
