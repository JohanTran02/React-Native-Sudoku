import { useCallback, useContext } from 'react';
import BottomSheet, {
    BottomSheetFlatList,
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { Text, Pressable, StyleSheet } from 'react-native';
import { difficulties } from '@/constants/Sudoku';
import { SudokuChancesContext } from '@/context/SudokuChances';
import { Sudoku } from '@/types/sudoku';
import { SudokuGameStateContext } from '@/context/SudokuGameState';

export default function SudokuModal() {
    const { bottomSheetRef } = useContext(SudokuChancesContext);
    const { startGame, gameState } = useContext(SudokuGameStateContext);

    // renders
    const renderBackdrop = useCallback(
        (props: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                pressBehavior={
                    gameState === 'lose'
                    || gameState === 'win'
                    || gameState === 'idle'
                        ? 'none'
                        : 'close'
                }
            />
        ),
        [gameState],
    );

    const renderItem = ({ item }: { item: Sudoku.SudokuModeType }) => (
        <Pressable
            onPress={() => {
                startGame(item.difficulty);
            }}
        >
            <Text style={styles.title}>{item.difficulty}</Text>
        </Pressable>
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            backdropComponent={renderBackdrop}
            enableDynamicSizing
            enablePanDownToClose
        >
            <BottomSheetFlatList
                data={difficulties}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 24,
        textAlign: 'center',
    },
    icon: {
        fontSize: 32,
        padding: 3,
    },
    center: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
