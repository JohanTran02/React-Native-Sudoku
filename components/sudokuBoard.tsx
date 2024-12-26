import { Dispatch, SetStateAction, useState, } from "react";
import { FlatList, View, } from "react-native";
import SudokuCell from "./sudokuCell";

export default function SudokuBoard({ board, playerPos, setPlayerPos }: {
    board: string[][],
    playerPos: { rowIndex: number, columnIndex: number },
    setPlayerPos: Dispatch<SetStateAction<{ rowIndex: number, columnIndex: number }>>
}) {
    const [currentNumber, setCurrentNumber] = useState<string>("-");
    return (
        <FlatList className="flex-1" data={board} renderItem={
            ({ item, index }) => {
                const rowIndex = index;
                return (
                    <View className="flex-row">
                        {item.map((cell, cellIndex) => (
                            <SudokuCell
                                key={cellIndex}
                                cell={cell}
                                rowIndex={rowIndex}
                                cellIndex={cellIndex}
                                playerPos={playerPos}
                                currentNumber={currentNumber}
                                setCurrentNumber={setCurrentNumber}
                                setPlayerPos={setPlayerPos}
                            />
                        ))}
                    </View>)
            }}>
        </FlatList>
    )
}