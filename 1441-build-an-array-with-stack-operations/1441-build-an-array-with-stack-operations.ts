function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];
    const targetLength = target.length;
    let targetIndex = 0;

    for (let num = 1; num <= target[targetLength - 1]; num++) {
        if (targetIndex === targetLength) break;

        result.push('Push');
        if (num === target[targetIndex]) {
            targetIndex++;
        } else {
            result.push('Pop');
        }
    }

    return result;
};