
/**
 * Validate if count is larger than 9, if true find the lowest
 * possible integer to get a value lower or equal than 9 and returns
 * the devided value
 * 
 * @param count as number
 * @returns a number lower or equal to 9
 */
export function handleCounterOverflow(count: number) {
    if (count > 9) {
        let divisor = 1;
        while (Math.floor(count / divisor) >= 9) {
            divisor++;
        }
        return Math.floor(count / divisor);
    } else {
        return count;
    }
}