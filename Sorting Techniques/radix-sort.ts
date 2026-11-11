function getDigit(num: number, place: number): number {
    return Math.floor(num / Math.pow(10, place)) % 10;
}

function radixSort(arr: Array<number>): Array<number> {
    let n: number = arr.length;
    let maxDigitCount: number = Math.max(...arr).toString().length;

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets: Array<Array<number>> = Array.from({ length: 10}, () => []);
        for (let i = 0; i < n; i++) {
            let digit: number = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = digitBuckets.flat();
    }

    return arr;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));