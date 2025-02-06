
// Exception: If the count is larger than 9, divide the count
// by the lowest integer possible in order to get a value
// lower or equal to 9
export function handleCounterOverflow(count: number) {
    if (count > 9) {
        let divisor = 1;
        while (count / divisor > 9) {
            divisor++;
        }
        return Math.floor(count / divisor);
    } else {
        return count;
    }
}