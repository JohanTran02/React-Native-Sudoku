import { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";


const initialBoard = [
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-"],
]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function Index() {
	const [currentNumber, setCurrentNumber] = useState("1");

	const [board, setBoard] = useState<string[][]>(initialBoard);

	const checkBoardClick = (currentNumber: string, rIndex: number, cIndex: number) => {
		if (board[rIndex][cIndex] !== "-" || board[rIndex][cIndex] === currentNumber) return;



		const newBoard: string[][] = board.map((row, rowIndex) =>
			row.map((cell, cellIndex) =>
				(rowIndex === rIndex && cellIndex === cIndex) ? (cell = currentNumber) : (cell = cell)
			)
		)
		setBoard(newBoard)
	}

	return (
		<View className="flex-1 items-center justify-center w-full">
			<View className="border-[1px] border-gray-300">
				{board.map(((row, rowIndex) => (
					<View key={rowIndex} className="flex-row">
						{row.map((cell, cellIndex) => (
							<TouchableWithoutFeedback key={cellIndex} onPress={() => checkBoardClick(currentNumber, rowIndex, cellIndex)}>
								<View
									className={
										`w-12 h-12 items-center justify-center border-[1px] border-gray-300
									${(cellIndex + 1) === 3 || (cellIndex + 1) === 6 ? "border-r-gray-700" : ""}
									${(rowIndex + 1) === 3 || (rowIndex + 1) === 6 ? "border-b-gray-700" : ""}`
									}>
									<Text className="text-2xl">{cell.includes("-") ? "" : cell}</Text>
								</View>
							</TouchableWithoutFeedback>
						))}
					</View>
				)))}
			</View>
			<View className="flex-row">
				{numbers.map(number => (
					<TouchableWithoutFeedback key={number} onPress={(() => setCurrentNumber(number))}>
						<Text className={`${currentNumber === number ? "bg-blue-400" : ""} text-2xl`}>{number}</Text>
					</TouchableWithoutFeedback>
				))}
			</View>
		</View>
	);
}