function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount: number = 0;
    let count: number = 0;
    let n: number = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            count+= 1;
            maxCount = Math.max(maxCount, count);
        } else count = 0;
    }
    return maxCount;
};