import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import { Dispatch, RefObject, SetStateAction, createContext } from "react"

export type GameCondition = "win" | "lose" | "idle" | "playing";

export interface SudokuContextType {
    chances: number,
    setChances: Dispatch<SetStateAction<number>>
    bottomSheetRef: RefObject<BottomSheetMethods>,
    gameCondition: GameCondition,
    setGameCondition: Dispatch<SetStateAction<GameCondition>>
}

export const SudokuChancesContext = createContext<SudokuContextType>({} as SudokuContextType)
