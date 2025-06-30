import { chanceLimit } from '@/constants/Sudoku';
import { SudokuBoardContext } from '@/context/SudokuBoard';
import { SudokuChancesContext } from '@/context/SudokuChances';
import { GameState, SudokuGameStateContext } from '@/context/SudokuGameState';
import { checkGameState } from '@/features/sudoku';
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

export const SudokuGameStateProvider = ({ children }: { children: ReactNode }) => {
    const { board } = useContext(SudokuBoardContext);
    const { initiateSudoku } = useContext(SudokuBoardContext);
    const { bottomSheetRef, setChances, chances } = useContext(SudokuChancesContext);
    const [gameState, setGameState] = useState<GameState>('idle');
    const hasWon = useMemo(() => checkGameState(board, chances), [board, chances]);

    const startGame = (difficulty: Difficulty) => {
        initiateSudoku(difficulty);
        setChances(chanceLimit);
        setGameState('playing');
        bottomSheetRef.current?.close();
    };

    useEffect(() => {
        if (hasWon === 'playing') return;

        if (hasWon === 'lose' || hasWon === 'win') {
            setGameState(hasWon);
            bottomSheetRef.current?.expand();
        }
    }, [hasWon, bottomSheetRef]);

    return (
        <>
            <SudokuGameStateContext.Provider value={{ gameState, setGameState, startGame }}>
                {children}
            </SudokuGameStateContext.Provider>
        </>
    );
};
