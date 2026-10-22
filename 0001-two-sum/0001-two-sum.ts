function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let targetVal = target - nums[i];
        if (hashMap.has(targetVal)) return [hashMap.get(targetVal), i];
        hashMap.set(nums[i], i);
    }
};
