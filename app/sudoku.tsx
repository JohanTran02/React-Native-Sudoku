import React from 'react';
import { StyleSheet, View } from 'react-native';
import SudokuBar from '../components/sudokuBar';
import SudokuBoard from '@/components/sudokuBoard';
import SudokuModal from '@/components/sudokuModal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SudokuStats from '@/components/sudokuStats';

export default function Sudoku() {
    return (
    // På mobilen försvinner containern när det är items-center??
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.center}>
                <SudokuStats />
                <SudokuBoard />
                <SudokuBar />
            </View>
            <SudokuModal />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
});
