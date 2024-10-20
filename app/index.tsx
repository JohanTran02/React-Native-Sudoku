import { Text, View } from "react-native";

export default function Index() {
	const testArray = [
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
	return (
		<View className="flex-1 items-center justify-center w-full">
			<View className="border-[1px] border-gray-300">
				{testArray.map(((row, rowIndex) => (
					<View key={rowIndex} className="flex-row">
						{row.map((cell, cellIndex) => (
							<View key={cellIndex}
								className={`w-12 h-12 items-center justify-center border-[1px] 
								border-gray-300 ${(cellIndex + 1) === 3 || (cellIndex + 1) === 6 ? "border-r-gray-700" : ""}
								${(rowIndex + 1) === 3 || (rowIndex + 1) === 6 ? "border-b-gray-700" : ""}`}>
								<Text className="text-2xl">{cell.includes("-") ? "" : cell}</Text>
							</View>
						))}
					</View>
				)))}
			</View>
			<View className="flex-row">
				{numbers.map(number => (
					<Text key={number} className="text-2xl">{number}</Text>
				))}
			</View>
		</View>
	);
}
