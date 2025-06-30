import { SudokuBoardContext } from '@/context/SudokuBoard';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SudokuChancesContext } from '@/context/SudokuChances';

export default function SudokuStats() {
    const { difficulty } = useContext(SudokuBoardContext);
    const { chances, bottomSheetRef } = useContext(SudokuChancesContext);

    return (
        <View>
            <View style={styles.stats}>
                <View>
                    <Text style={[styles.title]}>Difficulty </Text>
                    <Text style={[styles.title]}>{difficulty}</Text>
                </View>
                <View>
                    <Text style={[styles.title]}>Chances</Text>
                    <Text style={[styles.title]}>
                        {chances}
                        /3
                    </Text>
                </View>
                <AntDesign
                    name="bars"
                    size={24}
                    color="black"
                    style={[styles.icon]}
                    onPress={() => bottomSheetRef.current?.expand()}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    stats: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        gap: 50
    },
    title: {
        textTransform: 'capitalize',
        fontSize: 24,
    },
    icon: {
        fontSize: 32,
        padding: 5,
    },
});
