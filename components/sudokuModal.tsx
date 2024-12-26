import { useCallback, Dispatch, SetStateAction, RefObject, useState } from "react";
import BottomSheet, { BottomSheetView, BottomSheetFlatList, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, Text, Pressable, StyleSheet } from "react-native";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import { useSharedValue } from "react-native-reanimated";

const difficulties: SudokuModeType[] = [
    { difficulty: "easy", id: "Easy Mode" },
    { difficulty: "medium", id: "Medium Mode" },
    { difficulty: "hard", id: "Hard Mode" },
    { difficulty: "expert", id: "Expert Mode" }
];

export default function SudokuModal({ setDifficulty, bottomSheetModalRef: bottomSheetRef }: { setDifficulty: Dispatch<SetStateAction<Difficulty>>, bottomSheetModalRef: RefObject<BottomSheet> }) {
    const index = useSharedValue(0);
    const pos = useSharedValue(0);
    const [openModal, setOpenModal] = useState<boolean>(false)

    // renders
    const renderBackdrop = useCallback(
        () => (
            <BottomSheetBackdrop
                animatedIndex={index}
                animatedPosition={pos}
                pressBehavior={"close"}
            />
        ),
        []
    );
    // callbacks
    const handlePresentModalPress = useCallback(() => {
        setOpenModal(prevValue => !prevValue)
        console.log(openModal)
        if (bottomSheetRef.current) {
            openModal ? bottomSheetRef.current.close() : bottomSheetRef.current.expand();
        }
    }, [openModal]);

    const Item = ({ difficulty, setDifficulty }: { difficulty: Difficulty, setDifficulty: Dispatch<SetStateAction<Difficulty>> }) => (
        <Pressable onPress={() => {
            setDifficulty(difficulty)
        }}>
            <Text className="text-2xl text-center">{difficulty}</Text>
        </Pressable>
    );

    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    //Fortsätt med backdrop imorgon som ska täcka hela skärmen och vara över innehållet
    return (
        <GestureHandlerRootView className="flex-1">
            <Button
                onPress={handlePresentModalPress}
                title="Present Modal"
                color="black"
            />
            <BottomSheet
                ref={bottomSheetRef}
                backdropComponent={renderBackdrop}
                onChange={handleSheetChanges}
            >
                <BottomSheetView >
                    <BottomSheetFlatList
                        data={difficulties}
                        renderItem={({ item }) => <Item difficulty={item.difficulty} setDifficulty={setDifficulty} />}
                        keyExtractor={item => item.id} />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "grey",
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
    },
});