import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Dispatch, RefObject, SetStateAction, createContext } from 'react';

export interface SudokuContextType {
    chances: number;
    setChances: Dispatch<SetStateAction<number>>;
    bottomSheetRef: RefObject<BottomSheetMethods>;
}

export const SudokuChancesContext = createContext<SudokuContextType>({} as SudokuContextType);
