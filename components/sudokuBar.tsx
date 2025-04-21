import { numbers } from "@/constants/Sudoku";
import { SudokuBoardContext } from "@/context/SudokuBoardContext";
import { SudokuChancesContext } from "@/context/SudokuChancesContext";
import { SudokuPosContext } from "@/context/SudokuPosContext";
import { checkSolution } from "@/features/sudoku";
import { useContext } from "react";
import { Text, View, Pressable } from "react-native";

export default function SudokuBar() {
    const { boardSolution, board, setBoard } = useContext(SudokuBoardContext);
    const { playerPos } = useContext(SudokuPosContext);
    const { chances, setChances } = useContext(SudokuChancesContext);

    const checkBoardClick = (currentNumber: string) => {
        if (playerPos.columnIndex === -1 || playerPos.rowIndex === -1) return;
        if (board[playerPos.rowIndex][playerPos.columnIndex] !== "-" || board[playerPos.rowIndex][playerPos.columnIndex] === currentNumber) return;

        const validMove = checkSolution(playerPos.rowIndex, playerPos.columnIndex, boardSolution, currentNumber)
        if (!validMove) {
            if (chances > 0) setChances(prevCount => prevCount - 1)
            return;
        }

        const newBoard = [...board];
        newBoard[playerPos.rowIndex] = [...newBoard[playerPos.rowIndex]];
        newBoard[playerPos.rowIndex][playerPos.columnIndex] = currentNumber;

        setBoard(newBoard)
    }

    return (
        <View className="flex-row mt-2">
            {numbers.map(number => (
                <Pressable key={number} onPress={(() => {
                    checkBoardClick(number);
                })}>
                    <View><Text className={`text-4xl p-3`}>{number}</Text></View>
                </Pressable>
            ))}
        </View>
    )
}