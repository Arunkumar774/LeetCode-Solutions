function smallerNumbersThanCurrent(nums: number[]): number[] {
    let result: number[] = [];
    let n: number = nums.length;
    for (let i = 0; i < n; i++) {
        let count: number = 0;
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (nums[j] < nums[i]) count++;
        }
        result.push(count);
    }

    return result;
};