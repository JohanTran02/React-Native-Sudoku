import { SudokuChancesContext } from '@/context/SudokuChances';
import BottomSheet from '@gorhom/bottom-sheet';
import { ReactNode, useRef, useState } from 'react';

export const SudokuChancesProvider = ({ children }: { children: ReactNode }) => {
    const [chances, setChances] = useState<number>(3);

    const bottomSheetRef = useRef<BottomSheet>({} as BottomSheet);

    return (
        <>
            <SudokuChancesContext.Provider value={{ chances, setChances, bottomSheetRef }}>
                {children}
            </SudokuChancesContext.Provider>
        </>
    );
};
