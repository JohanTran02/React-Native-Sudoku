import { Dispatch, SetStateAction, createContext } from "react"

interface SudokuContextType {
    chances: number,
    setChances: Dispatch<SetStateAction<number>>
}

export const SudokuChancesContext = createContext<SudokuContextType>({} as SudokuContextType)
