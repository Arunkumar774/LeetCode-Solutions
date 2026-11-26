function longestCommonPrefix(strs: string[]): string {
    const n: number = strs.length;
    const m: number = strs[0].length;
    let longestCommonPrefix: string = '';

    for (let i = 0; i < m; i++) {
        const char: string = strs[0][i];
        let match: boolean = true;
        for (let j = 1; j < n; j++) {
            if (char !== strs[j][i]) {
                match = false;
                break;
            }
        }
        if (!match) {
            break;
        } else {
            longestCommonPrefix += char;
        }
    }

    return longestCommonPrefix;
};