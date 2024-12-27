import { numbers } from "@/constants/Sudoku";
import { Text, View, Pressable } from "react-native";

export default function SudokuBar({ checkBoardClick }: {
    checkBoardClick: (currentNumber: string) => void
}) {
    return (
        <View className="flex-1 flex-row">
            {numbers.map(number => (
                <Pressable key={number} onPress={(() => {
                    checkBoardClick(number)
                })}>
                    <View><Text className={`text-2xl`} >{number}</Text></View>
                </Pressable>
            ))}
        </View>
    )
}