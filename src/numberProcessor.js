const fs = require('fs');
const path = require('path');

// Sum Addition of all the numbers 
function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Find the maximum number
function findMax(numbers) {
    return Math.max(...numbers);
}

// Find the minimum number
function findMin(numbers) {
    return Math.min(...numbers);
}

// Average using array.map()
function averageNumbers(numbers) {
    const total = numbers
        .map(num => num)
        .reduce((sum, num) => sum + num, 0);

    return total / numbers.length;
}

// Main script: read numbers from a file and process them 
function processNumberFile(filePath) {
    try {
        const fullPath = path.join(__dirname, filePath);
        const data = fs.readFileSync(fullPath, 'utf8');

        const numbers = data
            .trim()
            .split('\n')
            .map(line => Number(line));

        console.log("Numbers:", numbers);
        console.log("Sum:", sumNumbers(numbers));
        console.log("Max:", findMax(numbers));
        console.log("Min:", findMin(numbers));
        console.log("Average:", averageNumbers(numbers));

    } catch (err) {
        console.error("Error reading the file", err);
    }
}

// processNumberFile('../data/sample-numbers.txt');

// Export functions for Jest
module.exports = {
    sumNumbers,
    findMax,
    findMin,
    averageNumbers
};
