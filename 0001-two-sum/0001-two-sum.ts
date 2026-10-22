function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();
    for (let i = 0, len = nums.length; i < len; i++) {
        let currentValue = nums[i];
        let targetValue = target - currentValue;
        if (hashMap.has(targetValue)) return [hashMap.get(targetValue), i];
        hashMap.set(currentValue, i);
    }
};