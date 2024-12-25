import { useRef, useCallback, Dispatch, SetStateAction, useState } from "react";
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

const difficulties: SudokuModeType[] = [
    { difficulty: "easy", id: "Easy Mode" },
    { difficulty: "medium", id: "Medium Mode" },
    { difficulty: "hard", id: "Hard Mode" },
    { difficulty: "expert", id: "Expert Mode" }
];

export default function SudokuModal({ setDifficulty }: { setDifficulty: Dispatch<SetStateAction<Difficulty>> }) {

    // ref
    const [showDropdown, setShowDropdown] = useState(false);
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const Item = ({ difficulty, setDifficulty }: { difficulty: Difficulty, setDifficulty: Dispatch<SetStateAction<Difficulty>> }) => (
        <TouchableWithoutFeedback onPress={() => {
            setDifficulty(difficulty)
            setShowDropdown(prevValue => !prevValue)
        }}>
            <Text className="text-2xl text-center">{difficulty}</Text>
        </TouchableWithoutFeedback>
    );


    return (
        <GestureHandlerRootView style={styles.container}>
            <BottomSheetModalProvider>
                <Button
                    onPress={handlePresentModalPress}
                    title="Present Modal"
                    color="black"
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <BottomSheetFlatList
                            data={difficulties}
                            renderItem={({ item }) => <Item difficulty={item.difficulty} setDifficulty={setDifficulty} />}
                            keyExtractor={item => item.id} />
                    </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
    },
    contentContainer: {
        backgroundColor: "white",
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
    },
});