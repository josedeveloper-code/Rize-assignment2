const fs = require('fs');
const path = require('path');

// Count the total words
function countWords(text) {
    const trimmedText = text.trim();
    if (trimmedText === "") return 0;
    const words = trimmedText.split(/\s+/);
    return words.length;

function countUnqiueWords(text) {
    const words = text.toLowerCase().match(/\b[a-z]+\b/g);
    const unique = new Set(words);
    return unique.size;
}
}

// Find the longest word
function findLongestWord(text) {
    const words = text.trim().split(/\s+/);
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Count number of lines
function countLines(text) {
    if (text === "") return 0;
    const lines = text.split('\n');
    return lines.length;
}

// Main script
function analyzeFile() {
    try {

        const filePath = path.join(__dirname, '../data/sample-text.txt');
        
        const data = fs.readFileSync(filePath, 'utf8');

        console.log("--- File Analysis ---");
        console.log("Total Words:  ", countWords(data));
        console.log("Longest Word: ", findLongestWord(data));
        console.log("Total Lines:  ", countLines(data));
        console.log("---------------------");

    } catch (err) {
        console.error("Error reading file:", err.message);
    }
}

// analyzeFile();

// console.log("=== Testing quote.txt ===");
// analyzeFile('../data/quote.txt');

// Export functions for Jest
module.exports = {
    countWords,
    findLongestWord,
    countLines
};


