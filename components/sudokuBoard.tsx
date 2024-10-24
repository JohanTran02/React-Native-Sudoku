import { Dispatch, SetStateAction, useState } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

export default function SudokuBoard({ board, playerPos, setPlayerPos }: {
    board: string[][],
    playerPos: { rowIndex: number, columnIndex: number },
    setPlayerPos: Dispatch<SetStateAction<{ rowIndex: number, columnIndex: number }>>
}) {
    const [currentNumber, setCurrentNumber] = useState<string>("");

    return (
        <View className="border-[1px] border-gray-300">
            {board.map(((row, rowIndex) => (
                <View key={rowIndex} className="flex-row">
                    {row.map((cell, cellIndex) => (
                        <TouchableWithoutFeedback key={cellIndex} onPress={() => {
                            setPlayerPos({ rowIndex, columnIndex: cellIndex })
                            setCurrentNumber(cell)
                        }}>
                            <View
                                className={
                                    `w-12 h-12 items-center justify-center border-[1px] border-gray-300
                            ${(cellIndex + 1) === 3 || (cellIndex + 1) === 6 ? "border-r-gray-700" : ""}
                            ${(rowIndex + 1) === 3 || (rowIndex + 1) === 6 ? "border-b-gray-700" : ""}
                            ${(playerPos.rowIndex === rowIndex) || (playerPos.columnIndex === cellIndex) ? "bg-slate-400" : ""}
                            ${(playerPos.rowIndex === rowIndex) && (playerPos.columnIndex === cellIndex) ? "bg-blue-500" : ""}
                            ${!cell.includes("-") && cell.includes(currentNumber) ? "bg-blue-700" : ""}`
                                }>
                                <Text className="text-2xl">{cell.includes("-") ? "" : cell}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            )))}
        </View>
    )
}