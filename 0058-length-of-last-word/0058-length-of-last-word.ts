function lengthOfLastWord(s: string): number {
    let n: number = s.length;
    let count: number = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (count !== 0 && s[i] === ' ') {
            break;
        } else if (s[i] !== ' ') {
            count++;
        }
    }

    return count;
};