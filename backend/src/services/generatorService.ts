

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

    const selectedCharsMap: Map<string, number> = new Map();
    selectedCharsMap.set(selectedChars[0], 0);
    selectedCharsMap.set(selectedChars[1], 0);

    grid.forEach((line) => {
        line.forEach((char: string) => {
            if (char === selectedChars[0]) {
                // The selectedCharsMap.get will never be undefined as it is set beforehand
                selectedCharsMap.set(selectedChars[0], selectedCharsMap.get(selectedChars[0])! + 1);
            } else if (char === selectedChars[1]) {
                selectedCharsMap.set(selectedChars[1], selectedCharsMap.get(selectedChars[1])! + 1);
            }
        })
    });

    const response = selectedCharsMap.size < 2
        ?
        [selectedCharsMap.get(selectedChars[0]), selectedCharsMap.get(selectedChars[0])]
        :
        Array.from(selectedCharsMap.values());

    return response;
}