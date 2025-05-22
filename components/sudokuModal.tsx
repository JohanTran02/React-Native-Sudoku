import { useCallback, useContext } from "react";
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Text, Pressable } from "react-native";
import { chanceLimit, difficulties } from "@/constants/Sudoku";
import { SudokuBoardContext } from "@/context/SudokuBoardContext";
import { SudokuChancesContext } from "@/context/SudokuChancesContext";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import { Sudoku } from "@/types/sudoku";

export default function SudokuModal() {
    const { initiateSudoku } = useContext(SudokuBoardContext);
    const { bottomSheetRef, setChances, gameCondition, setGameCondition } = useContext(SudokuChancesContext);

    const startGame = (difficulty: Difficulty) => {
        initiateSudoku(difficulty)
        setChances(chanceLimit);
        setGameCondition("playing");
    }

    // renders
    const renderBackdrop = useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                pressBehavior={gameCondition === "lose" || gameCondition === "win" ? "none" : "close"}
            />
        ),
        [gameCondition]
    );

    const renderItem = ({ item }: { item: Sudoku.SudokuModeType }) => (
        <Pressable onPress={() => {
            startGame(item.difficulty);
            bottomSheetRef.current?.close();
        }}>
            <Text className="text-2xl text-center">{item.difficulty}</Text>
        </Pressable>
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            backdropComponent={renderBackdrop}
            enableDynamicSizing
            enablePanDownToClose>
            <BottomSheetFlatList
                data={difficulties}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </BottomSheet>
    );
}