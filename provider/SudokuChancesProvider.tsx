
import { SudokuBoardContext } from "@/context/SudokuBoardContext";
import { GameCondition, SudokuChancesContext } from "@/context/SudokuChancesContext";
import { checkWin } from "@/features/sudoku";
import BottomSheet from "@gorhom/bottom-sheet";
import { ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";

export const SudokuChancesProvider = ({ children }: { children: ReactNode }) => {
    const { board } = useContext(SudokuBoardContext);
    const [chances, setChances] = useState<number>(3);
    const [gameCondition, setGameCondition] = useState<GameCondition>("idle")
    const bottomSheetRef = useRef<BottomSheet>(null);
    const hasWon = useMemo(() => checkWin(board), [board]);

    useEffect(() => {
        if (gameCondition !== "playing") return;

        const outOfChances = !hasWon && chances <= 0;
        const hasPlayerWon = hasWon && chances >= 0;

        if (outOfChances) {
            setGameCondition("lose");
            bottomSheetRef.current?.expand();
        } else if (hasPlayerWon) {
            setGameCondition("win");
            bottomSheetRef.current?.expand();
        }
    }, [chances, hasWon, gameCondition])

    return (
        <>
            <SudokuChancesContext.Provider value={{ chances, setChances, bottomSheetRef, gameCondition, setGameCondition }}>
                {children}
            </SudokuChancesContext.Provider>
        </>
    )
}