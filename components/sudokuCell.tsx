import { View, Text } from "react-native";

export default function SudokuCell({ playerPos, columnIndex, cell, rowIndex, currentNumber }: {
    playerPos: { rowIndex: number, columnIndex: number },
    columnIndex: number,
    cell: string
    rowIndex: number,
    currentNumber: string,
}) {

    return (
        <View
            className={
                `w-12 h-12 items-center justify-center border-[2px] border-gray-300
            ${(columnIndex + 1) === 3 || (columnIndex + 1) === 6 ? "border-r-gray-700" : ""}
            ${(rowIndex + 1) === 3 || (rowIndex + 1) === 6 ? "border-b-gray-700" : ""}
            ${((playerPos.rowIndex === rowIndex) || (playerPos.columnIndex === columnIndex)) && !(playerPos.columnIndex === columnIndex && playerPos.rowIndex === rowIndex) ? "bg-slate-300" : ""}
            ${(playerPos.columnIndex === columnIndex && playerPos.rowIndex === rowIndex) || (!cell.includes("-") && cell.includes(currentNumber)) ? "bg-blue-700" : ""}`
            }>
            <Text className="text-2xl">{cell.includes("-") ? "" : cell}</Text>
        </View>
    )
}