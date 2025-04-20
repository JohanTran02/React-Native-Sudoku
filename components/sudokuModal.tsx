/* eslint-disable no-undef */
import { useCallback, useContext } from "react";
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Text, Pressable } from "react-native";
import { chanceLimit, difficulties } from "@/constants/Sudoku";
import { SudokuBoardContext } from "@/context/SudokuBoardContext";
import { SudokuChancesContext } from "@/context/SudokuChancesContext";

export default function SudokuModal() {
    const { setDifficulty } = useContext(SudokuBoardContext);
    const { bottomSheetRef, setChances, gameCondition } = useContext(SudokuChancesContext);

    // renders
    const renderBackdrop = useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                pressBehavior={gameCondition === "lose" ? "none" : "close"}
            />
        ),
        [gameCondition]
    );

    const renderItem = ({ item }: { item: SudokuModeType }) => (
        <Pressable onPress={() => {
            setDifficulty(item.difficulty);
            setChances(chanceLimit);
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