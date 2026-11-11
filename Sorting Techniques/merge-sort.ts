function merge(left: Array<number>, right: Array<number>): Array<number> {
    let result: Array<number> = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(arr: Array<number>): Array<number> {
    if (arr.length <= 1) return arr;
    const mid: number = Math.floor(arr.length / 2);
    const left: Array<number> = mergeSort(arr.slice(0, mid));
    const right: Array<number> = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([3,5,4,2,1]));