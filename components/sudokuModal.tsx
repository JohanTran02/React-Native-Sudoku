/* eslint-disable no-undef */
import { useCallback, Dispatch, SetStateAction, RefObject } from "react";
import BottomSheet, { BottomSheetFlatList, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Text, Pressable } from "react-native";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import { difficulties } from "@/constants/Sudoku";

export default function SudokuModal({ setDifficulty, bottomSheetRef }: { setDifficulty: Dispatch<SetStateAction<Difficulty>>, bottomSheetRef: RefObject<BottomSheet> }) {
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
            setDifficulty(item.difficulty)
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