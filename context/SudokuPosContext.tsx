import { createContext, Dispatch, SetStateAction } from 'react';

export interface PlayerPos {
    rowIndex: number;
    columnIndex: number;
}

interface SudokuPosContextType {
    playerPos: PlayerPos;
    setPlayerPos: Dispatch<SetStateAction<PlayerPos>>;
}

export const SudokuPosContext = createContext<SudokuPosContextType>(
    {} as SudokuPosContextType
);