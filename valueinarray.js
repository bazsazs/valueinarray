function isEveryValueAnArray(array) {
    return array.every(element => Array.isArray(element));
}

// Test cases
console.log(isEveryValueAnArray([[1],[2]]));       // Output: true
console.log(isEveryValueAnArray(['1','2']));      // Output: false
console.log(isEveryValueAnArray([{1:1},{2:2}]));  // Output: false
