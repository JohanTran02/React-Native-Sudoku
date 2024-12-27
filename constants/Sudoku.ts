/* eslint-disable no-undef */

const difficulties: SudokuModeType[] = [
    { difficulty: "easy", id: "Easy Mode" },
    { difficulty: "medium", id: "Medium Mode" },
    { difficulty: "hard", id: "Hard Mode" },
    { difficulty: "expert", id: "Expert Mode" }
];

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const chanceLimit = 3;

export { difficulties, numbers, chanceLimit }