function bucketSort(arr: Array<number>): Array<number> {
    let n: number = arr.length;
    if (n === 0) return [];

    // The standard bucket sort will use the [0, 1) interval and
    // if you want to use it for numbers greater than 1
    // you have to change to logic of finding the index, remaining logic is as it is.
    for (const value of arr) {
        if (
            typeof value !== "number" ||
            !Number.isFinite(value) ||
            value < 0 ||
            value >= 1
        ) {
            throw new RangeError("Expected finite numbers in [0, 1)");
        }
    }

    const buckets: Array<Array<number>> = Array.from({ length: n }, () => []);

    for (const value of arr) {
        const index: number = Math.floor(value * n);
        buckets[index].push(value);
    }

    for (const bucket of buckets) {
        bucket.sort((a, b) => a - b);
    }

    return buckets.flat();
}

console.log(bucketSort([0.1, 0.9, 0.4, 0.8, 0.7, 0.5, 0.6]));