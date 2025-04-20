
import { SudokuBoardContext } from "@/context/SudokuBoardContext";
import { GameCondition, SudokuChancesContext } from "@/context/SudokuChancesContext";
import { checkWin } from "@/features/sudoku";
import BottomSheet from "@gorhom/bottom-sheet";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";

export const SudokuChancesProvider = ({ children }: { children: ReactNode }) => {
    const { board } = useContext(SudokuBoardContext);
    const [chances, setChances] = useState<number>(3);
    const [gameCondition, setGameCondition] = useState<GameCondition>("idle")
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (chances <= 0 && !checkWin(board)) {
            setGameCondition("lose");
            bottomSheetRef.current?.expand();
        }
        else if (chances >= 0 && checkWin(board)) {
            setGameCondition("win");
            bottomSheetRef.current?.expand();
        }
        return () => setGameCondition("idle");
    }, [chances, board])

    return (
        <>
            <SudokuChancesContext.Provider value={{ chances, setChances, bottomSheetRef, gameCondition }}>
                {children}
            </SudokuChancesContext.Provider>
        </>
    )
}