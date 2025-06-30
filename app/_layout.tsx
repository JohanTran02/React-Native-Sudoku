import { Stack } from 'expo-router/stack';
import { SudokuChancesProvider } from '@/provider/SudokuChances';
import { SudokuPosProvider } from '@/provider/SudokuPos';
import { SudokuBoardProvider } from '@/provider/SudokuBoard';
import { SudokuGameStateProvider } from '@/provider/SudokuGameState';

export default function RootLayout() {
    return (
        <SudokuBoardProvider>
            <SudokuPosProvider>
                <SudokuChancesProvider>
                    <SudokuGameStateProvider>
                        <Stack>
                            <Stack.Screen name="sudoku" />
                        </Stack>
                    </SudokuGameStateProvider>
                </SudokuChancesProvider>
            </SudokuPosProvider>
        </SudokuBoardProvider>
    );
}
