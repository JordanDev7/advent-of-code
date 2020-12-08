/* eslint-disable no-plusplus */
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

// eslint-disable-next-line consistent-return
const threeSumAndMultiply = (numbers, target) => {
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];
        let next = i + 1;
        let last = numbers.length - 1;

        while (next < last) {
            const sum = current + numbers[next] + numbers[last];

            if (sum === target) {
                return current * numbers[next] * numbers[last];
            }

            if (sum < target) next++;

            if (sum > target) last--;
        }
    }
};

export default { twoSumAndMultiply, threeSumAndMultiply };
