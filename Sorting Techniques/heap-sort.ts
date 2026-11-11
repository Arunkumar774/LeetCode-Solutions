function heapSort(arr: Array<number>): Array<number> {
    let n = arr.length;

    function siftDown(size: number, root: number) {
        while (true) {
            let largest: number = root;
            let left: number = 2 * root + 1;
            let right: number = 2 * root + 2;

            if (left < size && arr[left] > arr[largest]) {
                largest = left;
            }
            if (right < size && arr[right] > arr[largest]) {
                largest = right;
            }
            if (largest === root) break;
            [arr[root], arr[largest]] = [arr[largest], arr[root]];
            root = largest;
        }
    }

    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
        siftDown(n, i);
    }

    for (let end = n - 1; end >= 0; end--) {
        [arr[0], arr[end]] = [arr[end], arr[0]];
        siftDown(end, 0);
    }
    return arr;
}

console.log(heapSort([4, 2, 7, 3, 6]));