const twoSumAndMultiply = (numbers, target) => {
    const numbersHashMap = {};

    numbers.forEach((number, index) => {
        numbersHashMap[number] = index;
    });

    let answer;

    // eslint-disable-next-line no-restricted-syntax
    for (const number of numbers) {
        const sumDifference = target - number;

        if (numbersHashMap[sumDifference]) {
            answer = sumDifference * number;
            break;
        }
    }

    return answer;
};

export default { twoSumAndMultiply };
