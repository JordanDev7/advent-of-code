import index from '../src/index';
import dayOneFixture from './fixtures/dayOneFixture';

describe('index', () => {
    it('should multiply two elements which sum to target value', () => {
        const numbers = dayOneFixture;
        const target = 2020;
        const expectedAnswer = 1009899;

        expect(index.twoSumAndMultiply(numbers, target)).toBe(expectedAnswer);
    });

    it('should multiply three elements which sum to target value', () => {
        const numbers = dayOneFixture;
        const target = 2020;
        const expectedAnswer = 44211152;

        expect(index.threeSumAndMultiply(numbers, target)).toBe(expectedAnswer);
    });
});
