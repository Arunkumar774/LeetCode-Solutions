function countingSort(arr: Array<number>): Array<number> {
    if (arr.length === 0) {
        return [];
    }

    let n: number = arr.length;

    for (const value of arr) {
        if (!Number.isSafeInteger(value) || value < 0) {
            throw new RangeError("Expected non-negative safe integers");
        }
    }

    const max: number = Math.max(...arr);
    const count: Array<number> = new Array(max + 1).fill(0);

    for (const value of arr) {
        count[value]++;
    }

    const result: Array<number> = [];
    for (let value = 0; value <= max; value++) {
        for (let frequency = 0; frequency < count[value]; frequency++) {
            result.push(value);
        }
    }

    return result;
}

console.log(countingSort([4, 2, 2, 1, 4, 3]))