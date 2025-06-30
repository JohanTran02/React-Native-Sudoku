import { numbers } from '@/constants/Sudoku';
import { SudokuBoardContext } from '@/context/SudokuBoard';
import { SudokuChancesContext } from '@/context/SudokuChances';
import { SudokuPosContext } from '@/context/SudokuPos';
import { checkSolution } from '@/features/sudoku';
import { useContext } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function SudokuBar() {
    const { boardSolution, board, setBoard } = useContext(SudokuBoardContext);
    const { playerPos } = useContext(SudokuPosContext);
    const { chances, setChances } = useContext(SudokuChancesContext);

    const checkBoardClick = (currentNumber: string) => {
        if (playerPos.columnIndex === -1 || playerPos.rowIndex === -1) return;
        if (board[playerPos.rowIndex][playerPos.columnIndex] !== '-' || board[playerPos.rowIndex][playerPos.columnIndex] === currentNumber) return;

        const validMove = checkSolution(playerPos.rowIndex, playerPos.columnIndex, boardSolution, currentNumber);
        if (!validMove) {
            if (chances > 0) setChances((prevCount) => prevCount - 1);
            return;
        }

        const newBoard = [...board];
        newBoard[playerPos.rowIndex] = [...newBoard[playerPos.rowIndex]];
        newBoard[playerPos.rowIndex][playerPos.columnIndex] = currentNumber;

        setBoard(newBoard);
    };

    return (
        <View style={styles.stats}>
            {numbers.map((number) => (
                <Pressable
                    key={number}
                    onPress={(() => {
                        checkBoardClick(number);
                    })}
                >
                    <View><Text style={styles.title}>{number}</Text></View>
                </Pressable>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    stats: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 32,
        paddingHorizontal: 3,
    },
});
