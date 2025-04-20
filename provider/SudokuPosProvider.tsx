import { PlayerPos, SudokuPosContext } from "@/context/SudokuPosContext";
import { ReactNode, useState } from "react"

export const SudokuPosProvider = (({ children }: { children: ReactNode }) => {
    const [playerPos, setPlayerPos] = useState<PlayerPos>({ rowIndex: -1, columnIndex: -1 });
    return (
        <>
            <SudokuPosContext.Provider value={{ playerPos: playerPos, setPlayerPos: setPlayerPos }}>
                {children}
            </SudokuPosContext.Provider>
        </>
    )
})