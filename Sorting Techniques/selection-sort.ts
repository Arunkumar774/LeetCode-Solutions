function selectionSort(arr: Array<number>): Array<number> {
    let n: number = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex: number = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSort([3,5,4,2,1]))