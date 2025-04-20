import { Stack } from "expo-router/stack";
import "../global.css"
import { SudokuChancesProvider } from "@/provider/SudokuProvider";
import { SudokuPosProvider } from "@/provider/SudokuPosProvider";
import { SudokuBoardProvider } from "@/provider/SudokuBoardProvider";

export default function RootLayout() {
  return (
    <SudokuBoardProvider>
      <SudokuPosProvider>
        <SudokuChancesProvider>
          <Stack>
            <Stack.Screen name="index" />
          </Stack>
        </SudokuChancesProvider>
      </SudokuPosProvider>
    </SudokuBoardProvider>
  );
}
