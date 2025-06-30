import { createContext, Dispatch, SetStateAction } from "react";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

export type GameState = "win" | "lose" | "idle" | "playing";

export interface SudokuGameStateContextType {
    setGameState: Dispatch<SetStateAction<GameState>>,
    gameState: GameState,
    startGame: (difficulty: Difficulty) => void;
}

export const SudokuGameStateContext = createContext<SudokuGameStateContextType>({} as SudokuGameStateContextType);