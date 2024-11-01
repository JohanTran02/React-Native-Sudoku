import { Text, View, TouchableWithoutFeedback } from "react-native";

export default function SudokuBar({ checkBoardClick }: {
    checkBoardClick: (currentNumber: string) => void
}) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

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