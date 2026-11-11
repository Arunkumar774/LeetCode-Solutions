function findErrorNums(nums: number[]): number[] {
    let n: number = nums.length;
    let duplicateNumber: number;
    let numsSet = new Set<number>();
    let sum: number = 0;
    for (const num of nums) {
        if (numsSet.has(num)) {
            duplicateNumber = num;
        } else {
            numsSet.add(num);
            sum += num;
        }
    }
    let actualSum = (n * (n + 1)) / 2;
    return [duplicateNumber, actualSum - sum];
};