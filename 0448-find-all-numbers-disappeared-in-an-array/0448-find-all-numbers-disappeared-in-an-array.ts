function findDisappearedNumbers(nums: number[]): number[] {
    const n: number = nums.length;
    const result: number[] =  Array.from({ length: n}, (_, i) => i + 1);

    for (const num of nums) {
        result[num - 1] = -1;
    }

    return result.filter(num => num !== -1);
};