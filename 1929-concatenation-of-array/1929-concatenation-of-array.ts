function getConcatenation(nums: number[]): number[] {
    // return nums.concat(nums);
    // return [...nums, ...nums];
    let n: number = nums.length;
    let ans: number[] = Array.from({ length: 2 * n }, () => 0);
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans
};