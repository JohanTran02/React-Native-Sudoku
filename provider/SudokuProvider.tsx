
import { SudokuChancesContext } from "@/context/SudokuChancesContext";
import { ReactNode, useState } from "react";

export const SudokuChancesProvider = ({ children }: { children: ReactNode }) => {
    const [chances, setChances] = useState<number>(3);
    return (
        <>
            <SudokuChancesContext.Provider value={{ chances: chances, setChances: setChances }}>
                {children}
            </SudokuChancesContext.Provider>
        </>
    )
}