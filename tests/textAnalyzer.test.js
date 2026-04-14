const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

describe("Text Analyzer Functions", () => {

    test("countWords works", () => {
        expect(countWords("hello world!")).toBe(2);
    });

    test("findLongestWord works", () => {
        expect(findLongestWord("The quick brown fox")).toBe("quick");
    });

    test("countLines works", () => {
        const text = "line one\nline two\nline three";
        expect(countLines(text)).toBe(3);
    });

});
