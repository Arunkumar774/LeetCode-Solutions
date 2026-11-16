function smallerNumbersThanCurrent(nums: number[]): number[] {
    let n: number = nums.length;
    const count: number[] = new Array(101).fill(0);
    const result: number[] = [];

    for (const num of nums) {
        count[num]++;
    }

    for (let i = 1; i < 101; i++) {
        count[i] += count[i - 1];
    }
    
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num === 0) {
            result.push(0);
        } else {
            result.push(count[num - 1]);
        }
    }

    return result;
};