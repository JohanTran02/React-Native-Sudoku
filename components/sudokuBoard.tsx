import { Dispatch, memo, SetStateAction, useCallback, useState, } from "react";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";
// import SudokuCell from "./sudokuCell";

function SudokuBoard({ board, playerPos, setPlayerPos }: {
    board: string[][],
    playerPos: { rowIndex: number, columnIndex: number },
    setPlayerPos: Dispatch<SetStateAction<{ rowIndex: number, columnIndex: number }>>
}) {
    const [currentNumber, setCurrentNumber] = useState<string>("-");

    const flattenBoard = board.flatMap((row, rowIndex) =>
        row.map((cell, columnIndex) => ({ value: cell, rowIndex, columnIndex }))
    );

    const renderItem = useCallback(
        ({ item }: { item: { value: string, rowIndex: number, columnIndex: number } }) => (
            <Pressable
                className="w-12 h-12"
                onPressIn={() => {
                    setPlayerPos({ rowIndex: item.rowIndex, columnIndex: item.columnIndex });
                    setCurrentNumber(item.value);
                }}
                style={[
                    styles.cell,
                    ((playerPos.rowIndex === item.rowIndex) || (playerPos.columnIndex === item.columnIndex) && !(playerPos.columnIndex === item.columnIndex && playerPos.rowIndex === item.rowIndex)) && styles.rowColumnBackground,
                    ((playerPos.columnIndex === item.columnIndex && playerPos.rowIndex === item.rowIndex) || (!item.value.includes("-") && item.value.includes(currentNumber))) && styles.currentNumber,
                    ((item.columnIndex + 1) % 3 === 0 && item.columnIndex !== 8) && styles.rightBorder,
                    ((item.rowIndex + 1) % 3 === 0 && item.rowIndex !== 8) && styles.bottomBorder,
                    //Border around the whole board. Borderwidth color is barely noticable from the cells maybe check in the future?
                    // ((item.rowIndex === 8 || item.columnIndex === 8) || (item.rowIndex === 0 || item.columnIndex === 0)) && styles.ExtraBorder,
                ]}
            >
                <Text className="text-2xl" style={styles.text}>{item.value.includes("-") ? "" : item.value}</Text>
            </Pressable>
        )

        ,
        [currentNumber, playerPos, setPlayerPos]
    );

    return (
        <FlatList
            data={flattenBoard}
            renderItem={renderItem}
            keyExtractor={(item) => `r${item.rowIndex}-c${item.columnIndex}`}
            numColumns={9}
            scrollEnabled={false}
        />
    )
}

export default memo(SudokuBoard)

const styles = StyleSheet.create({
    cell: {
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
    },
    text: {
        textAlign: "center",
        textAlignVertical: "center"
    },
    bottomBorder: {
        borderColor: "#000",
        borderBottomWidth: 1.5,
    },
    rightBorder: {
        borderColor: "#000",
        borderRightWidth: 1.5,
    },
    currentNumber: {
        backgroundColor: "blue"
    },
    rowColumnBackground: {
        backgroundColor: "lightblue",
    },
    // extraBorder: {
    //     borderWidth: StyleSheet.hairlineWidth,
    //     borderColor: "#000"
    // }
})
