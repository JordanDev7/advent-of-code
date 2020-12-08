import index from '../src/index';
import twoSumAndMultiplyFixture from './fixtures/twoSumAndMultiplyFixture';

describe('index', () => {
    it('should multiply two elements which sum to target value', () => {
        const numbers = twoSumAndMultiplyFixture;
        const target = 2020;
        const expectedAnswer = 1009899;

        expect(index.twoSumAndMultiply(numbers, target)).toBe(expectedAnswer);
    });
});
