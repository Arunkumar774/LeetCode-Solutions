function lomutoPartition(arr: Array<number>, low: number, high: number): number {
    let pivot: number = arr[high];
    let i: number = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}

function hoarePartition(arr: Array<number>, low: number, high: number): number {
    let pivot: number = arr[Math.floor((low + high) / 2)];
    let left: number = low - 1;
    let right: number = high + 1;
    while(true) {
        do {
            left++;
        } while (arr[left] < pivot);
        
        do {
            right--;
        } while (arr[right] > pivot);
        if (left >= right) return right;
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
}

function quickSort(arr: Array<number>, low = 0, high = arr.length - 1): Array<number> {
    if (low >= high) return arr;
    // lomuto partition solves pivot in it's final position so we will skip it sending again for the sort
    // but hoare will not necessarily in it's final so we have to pass it.
    // let p = lomutoPartition(arr, low, high);

    // quickSort(arr, low, p - 1);
    // quickSort(arr, p + 1, high);
    let p: number = hoarePartition(arr, low, high);

    quickSort(arr, low, p);
    quickSort(arr, p + 1, high);

    return arr;
}

console.log(quickSort([4, 2, 7, 3, 6]));