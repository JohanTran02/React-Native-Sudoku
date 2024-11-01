import { Dispatch, SetStateAction } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

export default function SudokuCell({ playerPos, setPlayerPos, cellIndex, cell, rowIndex, currentNumber, setCurrentNumber }: {
    playerPos: { rowIndex: number, columnIndex: number },
    setPlayerPos: Dispatch<SetStateAction<{ rowIndex: number, columnIndex: number }>>
    cellIndex: number,
    cell: string
    rowIndex: number,
    currentNumber: string,
    setCurrentNumber: Dispatch<SetStateAction<string>>
}) {

    return (
        <TouchableWithoutFeedback onPress={() => {
            setPlayerPos({ rowIndex, columnIndex: cellIndex })
            setCurrentNumber(cell)
        }}>
            <View
                className={
                    `w-12 h-12 items-center justify-center border-[2px] border-gray-300
            ${(cellIndex + 1) === 3 || (cellIndex + 1) === 6 ? "border-r-gray-700" : ""}
            ${(rowIndex + 1) === 3 || (rowIndex + 1) === 6 ? "border-b-gray-700" : ""}
            ${((playerPos.rowIndex === rowIndex) || (playerPos.columnIndex === cellIndex)) && !(playerPos.columnIndex === cellIndex && playerPos.rowIndex === rowIndex) ? "bg-slate-300" : ""}
            ${(playerPos.columnIndex === cellIndex && playerPos.rowIndex === rowIndex) || (!cell.includes("-") && cell.includes(currentNumber)) ? "bg-blue-700" : ""}`
                }>
                <Text className="text-2xl">{cell.includes("-") ? "" : cell}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}