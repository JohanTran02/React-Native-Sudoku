import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { getSudoku } from "sudoku-gen"
import SudokuBar from "../components/sudokuBar";
import { generatePuzzle, generateSolution, createBoard, checkSolution } from "@/features/sudoku";
import SudokuBoard from "@/components/sudokuBoard";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";
import SudokuModal from "@/components/sudokuModal";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
	const chanceLimit = 3;
	const [difficulty, setDifficulty] = useState<Difficulty>("easy")
	const [chances, setChances] = useState<number>(chanceLimit);
	const [board, setBoard] = useState<string[][]>(createBoard());
	const [boardSolution, setBoardSolution] = useState<string[][]>(createBoard());
	const [playerPos, setPlayerPos] = useState<{ rowIndex: number, columnIndex: number }>({ rowIndex: -1, columnIndex: -1 });
	const bottomSheetRef = useRef<BottomSheet>(null);

	useEffect(() => {
		const sudoku = getSudoku(difficulty);
		setBoard(generatePuzzle(sudoku.puzzle));
		setBoardSolution(generateSolution(sudoku.solution))
		return () => { }
	}, [difficulty, board.length])

	//TODO Make a win condition
	// useEffect(() => {
	// 	if (chances <= 0) console.log("you lose");
	// 	return () => { }
	// }, [chances])

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
		//På mobilen försvinner containern när det är items-center?? 
		<GestureHandlerRootView className="flex-1 flex">
			<View className="flex flex-1 items-center">
				<Text className="text-2xl">Chances</Text>
				<Text className="text-2xl">{chances}/3</Text>
				<SudokuBoard board={board} setPlayerPos={setPlayerPos} playerPos={playerPos} />
				<SudokuBar checkBoardClick={checkBoardClick} />
			</View>
			<SudokuModal setDifficulty={setDifficulty} bottomSheetRef={bottomSheetRef} />
		</GestureHandlerRootView>
	);
}