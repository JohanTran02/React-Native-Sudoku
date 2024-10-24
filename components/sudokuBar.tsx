import { checkSolution } from "@/features/sudoku";
import { Dispatch, SetStateAction } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";

export default function SudokuBar({ setBoard, boardSolution, chances, setChances, playerPos, board }: {
    setBoard: Dispatch<SetStateAction<string[][]>>,
    boardSolution: string[][],
    chances: number,
    setChances: Dispatch<SetStateAction<number>>,
    playerPos: { rowIndex: number, columnIndex: number },
    board: string[][]
}) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const checkBoardClick = (currentNumber: string) => {
        if (playerPos.columnIndex === -1 || playerPos.rowIndex === -1) return;
        if (board[playerPos.rowIndex][playerPos.columnIndex] !== "-" || board[playerPos.rowIndex][playerPos.columnIndex] === currentNumber) return;

        const validMove = checkSolution(playerPos.rowIndex, playerPos.columnIndex, boardSolution, currentNumber)
        if (!validMove) {
            if (chances > 0) setChances(prevCount => prevCount - 1)
            return;
        }

        const newBoard: string[][] = board.map((row, rowIndex) =>
            row.map((column, columnIndex) =>
                (rowIndex === playerPos.rowIndex && columnIndex === playerPos.columnIndex) ? (column = currentNumber) : (column)
            )
        )
        setBoard(newBoard)
    }

    return (
        <View className="flex-row">
            {numbers.map(number => (
                <TouchableWithoutFeedback key={number} onPress={(() => {
                    checkBoardClick(number)
                })}>
                    <Text className={`text-2xl`} >{number}</Text>
                </TouchableWithoutFeedback>
            ))}
        </View>
    )
}