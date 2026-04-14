const { sumNumbers, findMax, findMin, averageNumbers } = require('../src/numberProcessor');

describe("Number Processor Functions", () => {

    test("sumNumbers works", () => {
        expect(sumNumbers([1, 2, 3, 4])).toBe(10);
    });

    test("findMax works", () => {
        expect(findMax([3, 9, 2, 7])).toBe(9);
    });

    test("findMin works", () => {
        expect(findMin([3, 9, 2, 7])).toBe(2);
    });

    test("averageNumbers works", () => {
        expect(averageNumbers([2, 4, 6, 8])).toBe(5);
    });

});
