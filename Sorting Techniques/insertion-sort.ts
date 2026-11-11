function insertionSort(arr: Array<number>): Array<number> {
    let n: number = arr.length;
    for (let i = 1; i < n; i++) {
        let key: number = arr[i];
        let j: number = i - 1;
        while (j >=0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--; 
        }
        arr[j + 1] = key;
        
    }
    return arr;
}

console.log(insertionSort([3,5,4,2,1]))