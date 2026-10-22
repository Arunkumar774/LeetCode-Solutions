function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i];
        if (hashMap.has(val)) return [hashMap.get(val), i];
        hashMap.set(nums[i], i);
    }
};