import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types"
import { Dispatch, RefObject, SetStateAction, createContext } from "react"

export type GameCondition = "win" | "lose" | "idle";

interface SudokuContextType {
    chances: number,
    setChances: Dispatch<SetStateAction<number>>
    bottomSheetRef: RefObject<BottomSheetMethods>,
    gameCondition: GameCondition
}

export const SudokuChancesContext = createContext<SudokuContextType>({} as SudokuContextType)
