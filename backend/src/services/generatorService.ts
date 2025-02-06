

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