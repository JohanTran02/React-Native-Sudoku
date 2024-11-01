import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, View, Text, TouchableWithoutFeedback } from "react-native";
import { Difficulty } from "sudoku-gen/dist/types/difficulty.type";

type SudokuModeType = {
    id: string,
    difficulty: Difficulty,
}

const difficulties: SudokuModeType[] = [
    { difficulty: "easy", id: "Easy Mode" },
    { difficulty: "medium", id: "Medium Mode" },
    { difficulty: "hard", id: "Hard Mode" },
    { difficulty: "expert", id: "Expert Mode" }
];

export default function SudokuDiff({ difficulty, setDifficulty }: {
    difficulty: Difficulty,
    setDifficulty: Dispatch<SetStateAction<Difficulty>>
}) {
    const [showDropdown, setShowDropdown] = useState(false);

    const Item = ({ difficulty, setDifficulty }: { difficulty: Difficulty, setDifficulty: Dispatch<SetStateAction<Difficulty>> }) => (
        <TouchableWithoutFeedback onPress={() => {
            setDifficulty(difficulty)
            setShowDropdown(prevValue => !prevValue)
        }}>
            <Text className="text-2xl text-center">{difficulty}</Text>
        </TouchableWithoutFeedback>
    );

    return (
        <View>
            <View>
                <TouchableWithoutFeedback onPress={() => setShowDropdown(prevValue => !prevValue)}>
                    <Text className="text-2xl text-center">{difficulty}</Text>
                </TouchableWithoutFeedback>
                {showDropdown &&
                    <FlatList
                        data={difficulties}
                        renderItem={({ item }) => <Item difficulty={item.difficulty} setDifficulty={setDifficulty} />}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        </View>
    )
} 