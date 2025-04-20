
import { GameCondition, SudokuChancesContext } from "@/context/SudokuChancesContext";
import BottomSheet from "@gorhom/bottom-sheet";
import { ReactNode, useEffect, useRef, useState } from "react";

export const SudokuChancesProvider = ({ children }: { children: ReactNode }) => {
    const [chances, setChances] = useState<number>(3);
    const [gameCondition, setGameCondition] = useState<GameCondition>("idle")
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (chances <= 0) {
            setGameCondition("lose");
            bottomSheetRef.current?.expand();
        }
        return () => setGameCondition("idle");
    }, [chances])

    return (
        <>
            <SudokuChancesContext.Provider value={{ chances, setChances, bottomSheetRef, gameCondition }}>
                {children}
            </SudokuChancesContext.Provider>
        </>
    )
}