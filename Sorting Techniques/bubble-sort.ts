function bubbleSort(arr: Array<number>): Array<number> {
    let n: number = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped: boolean = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSort([3,5,4,2,1]))