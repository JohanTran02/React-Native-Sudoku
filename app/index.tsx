import React, { useContext } from "react";
import { Text, View } from "react-native";
import SudokuBar from "../components/sudokuBar";
import SudokuBoard from "@/components/sudokuBoard";
import SudokuModal from "@/components/sudokuModal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SudokuChancesContext } from "@/context/SudokuChancesContext";


export default function Index() {
	const { chances } = useContext(SudokuChancesContext);
	return (
		//På mobilen försvinner containern när det är items-center?? 
		<GestureHandlerRootView className="flex-1">
			<View className="items-center">
				<Text className="text-2xl">Chances</Text>
				<Text className="text-2xl">{chances}/3</Text>
				<SudokuBoard />
				<SudokuBar />
			</View>
			<SudokuModal />
		</GestureHandlerRootView>
	);
}