/* eslint-disable no-undef */
import { useCallback, RefObject, useContext } from "react";
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Text, Pressable } from "react-native";
import { difficulties } from "@/constants/Sudoku";
import { SudokuBoardContext } from "@/context/SudokuBoardContext";

export default function SudokuModal({ bottomSheetRef }: { bottomSheetRef: RefObject<BottomSheet> }) {
    const { setDifficulty } = useContext(SudokuBoardContext);

    // renders
    const renderBackdrop = useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                pressBehavior={"close"}
            />
        ),
        []
    );

    const renderItem = ({ item }: { item: SudokuModeType }) => (
        <Pressable onPress={() => {
            setDifficulty(item.difficulty);
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