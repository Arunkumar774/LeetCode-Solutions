function romanToInt(s: string): number {
    const n: number = s.length;
    let sum: number = 0;
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    } as const;
    
    for (let i = 0; i < n; i++) {
        if (map[s[i]] < map[s[i + 1]]) {
            const value = map[s[i + 1]] - map[s[i]];
            sum += value;
            i++;
            continue;
        }
        sum += map[s[i]];
    }
    return sum;
};