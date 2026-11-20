function removeDuplicates(nums: number[]): number {
    let n: number = nums.length;
    let i: number = 0;

    for (let j = 1 ; j < n; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};