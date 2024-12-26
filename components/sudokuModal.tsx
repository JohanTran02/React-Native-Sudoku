import { useCallback, Dispatch, SetStateAction, RefObject, useState, useMemo } from "react";
import BottomSheet, { BottomSheetView, BottomSheetFlatList, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import { Text, Pressable } from "react-native";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

const difficulties: SudokuModeType[] = [
    { difficulty: "easy", id: "Easy Mode" },
    { difficulty: "medium", id: "Medium Mode" },
    { difficulty: "hard", id: "Hard Mode" },
    { difficulty: "expert", id: "Expert Mode" }
];

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

    const Item = ({ difficulty, setDifficulty }: { difficulty: Difficulty, setDifficulty: Dispatch<SetStateAction<Difficulty>> }) => (
        <Pressable onPress={() => {
            setDifficulty(difficulty)
        }}>
            <Text className="text-2xl text-center">{difficulty}</Text>
        </Pressable>
    );

    //Fortsätt med backdrop imorgon som ska täcka hela skärmen och vara över innehållet
    return (
        <BottomSheet
            ref={bottomSheetRef}
            backdropComponent={renderBackdrop}>
            <BottomSheetView className="flex-1 flex items-center">
                <BottomSheetFlatList
                    data={difficulties}
                    renderItem={({ item }) => <Item difficulty={item.difficulty} setDifficulty={setDifficulty} />}
                    keyExtractor={item => item.id}
                />
            </BottomSheetView>
        </BottomSheet>
    );
}