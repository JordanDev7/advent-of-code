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
    for (let i = 0; i < numbers.length; i++) {
        const first = numbers[i];

        for (let j = 0; j < numbers.length; j++) {
            const second = numbers[j];

            for (let k = 0; k < numbers.length; k++) {
                const third = numbers[k];

                if (first + second + third === target) {
                    return first * second * third;
                }
            }
        }
    }
};

export default { twoSumAndMultiply, threeSumAndMultiply };
