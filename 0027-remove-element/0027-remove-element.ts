function removeElement(nums: number[], val: number): number {
    let n: number = nums.length;
    let i: number = 0;

    for (let j = 0; j < n; j++) {
        if (val !== nums[j]) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};