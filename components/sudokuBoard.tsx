import { Dispatch, SetStateAction, useState, } from "react";
import { FlatList, Pressable, View, } from "react-native";
import SudokuCell from "./sudokuCell";

export default function SudokuBoard({ board, playerPos, setPlayerPos }: {
    board: string[][],
    playerPos: { rowIndex: number, columnIndex: number },
    setPlayerPos: Dispatch<SetStateAction<{ rowIndex: number, columnIndex: number }>>
}) {
    const [currentNumber, setCurrentNumber] = useState<string>("-");

    const Cell = ({ item, index }: { item: string[], index: number }) => {
        const rowIndex = index;
        return (
            <View>
                {item.map((cell, columnIndex) => (
                    <Pressable
                        key={columnIndex}
                        onPress={() => {
                            setPlayerPos({ rowIndex, columnIndex })
                            setCurrentNumber(cell)
                        }}>
                        <SudokuCell
                            cell={cell}
                            rowIndex={rowIndex}
                            columnIndex={columnIndex}
                            playerPos={playerPos}
                            currentNumber={currentNumber}
                        />
                    </Pressable>
                ))}
            </View>
        )
    }

    return (
        <View className="flex-1">
            <FlatList
                data={board}
                renderItem={({ item, index }) => <Cell item={item} index={index} />}
                numColumns={9}>
            </FlatList>
        </View>
    )
}