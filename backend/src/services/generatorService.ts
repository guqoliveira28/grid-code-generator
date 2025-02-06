import { handleCounterOverflow } from "../helpers/counterOverflow";


export function generateGrid() {
    const gridSize = [10, 10];
    const grid = [];

    // Iterate through lines and columns of the grid
    for (let line = 0; line < gridSize[0]; line++) {
        const lineArray = [];
        for (let column = 0; column < gridSize[1]; column++) {
            // Generate a random char [a-z] - from charCode 97 to 122
            lineArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
        }
        grid.push(lineArray);
    }

    return grid;
}

export function generateCode(grid: Array<string[]>) {
    // Get current seconds in a string
    const secondsInDateString = (new Date()).getSeconds().toString().padStart(2, '0');
    const secondsInDate = [Number(secondsInDateString[0]), Number(secondsInDateString[1])];

    const selectedChars = [
        grid[secondsInDate[0]][secondsInDate[1]],
        grid[secondsInDate[1]][secondsInDate[0]]
    ];

    // Map with selected char and char count pair
    const charsCounterMap: Map<string, number> = new Map();
    charsCounterMap.set(selectedChars[0], 0);
    charsCounterMap.set(selectedChars[1], 0);

    // Iterate through a multidimensional array
    grid.forEach((line) => {
        line.forEach((char: string) => {
            if (char === selectedChars[0]) {
                // The selectedCharsMap.get will never be undefined as it is set beforehand
                charsCounterMap.set(selectedChars[0], charsCounterMap.get(selectedChars[0])! + 1);
            } else if (char === selectedChars[1]) {
                charsCounterMap.set(selectedChars[1], charsCounterMap.get(selectedChars[1])! + 1);
            }
        })
    });

    // If charsCounterMap has only one key, the selected chars are the same, so the count
    // is the same
    if (charsCounterMap.size < 2) {
        const sameCount = handleCounterOverflow(charsCounterMap.get(selectedChars[0])!);
        return [sameCount, sameCount];
    } else {
        return [
            handleCounterOverflow(charsCounterMap.get(selectedChars[0])!),
            handleCounterOverflow(charsCounterMap.get(selectedChars[1])!)
        ]
    }
}