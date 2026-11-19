function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for (const token of tokens) {
        if (!'+-*/'.includes(token)) {
            stack.push(Number(token));
        } else {
            const val1: number = stack.pop();
            const val2: number = stack.pop();
            let result: number;
            switch (token) {
                case '+': 
                    result = val2 + val1;
                    break;
                case '-': 
                    result = val2 - val1;
                    break;
                case '*': 
                    result = val2 * val1;
                    break;
                case '/': 
                    result = Math.trunc(val2 / val1);
                    break;
                default:
                    console.log('Wrong operator!');
            }
            stack.push(result);
        }
    }

    return stack.pop();
};