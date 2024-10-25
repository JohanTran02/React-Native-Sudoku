import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getSudoku } from "sudoku-gen"
import SudokuBar from "../components/sudokuBar";
import { generatePuzzle, generateSolution, createBoard } from "@/features/sudoku";
import SudokuBoard from "@/components/sudokuBoard";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

export default function Index() {
	const chanceLimit = 3;
	const [difficulty, setDifficulty] = useState<Difficulty>("easy")
	const [chances, setChances] = useState<number>(chanceLimit);
	const [board, setBoard] = useState<string[][]>(createBoard());
	const [boardSolution, setBoardSolution] = useState<string[][]>(createBoard());
	const [playerPos, setPlayerPos] = useState<{ rowIndex: number, columnIndex: number }>({ rowIndex: -1, columnIndex: -1 });

	useEffect(() => {
		const sudoku = getSudoku(difficulty);
		setBoard(generatePuzzle(sudoku.puzzle));
		setBoardSolution(generateSolution(sudoku.solution))
		return () => { }
	}, [difficulty, board.length])

	useEffect(() => {
		if (chances <= 0) console.log("you lose");
		return () => { }
	}, [chances])


	return (
		<View className="flex-1 items-center justify-center w-full">
			<Text className="text-2xl">Chances</Text>
			<Text className="text-2xl">{chances}/3</Text>
			<SudokuBoard board={board} setPlayerPos={setPlayerPos} playerPos={playerPos} />
			<SudokuBar
				setBoard={setBoard}
				setChances={setChances}
				chances={chances}
				boardSolution={boardSolution}
				board={board}
				playerPos={playerPos} />
		</View>
	);
}