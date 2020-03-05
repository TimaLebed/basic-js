module.exports = class DepthCalculator {
    calculateDepth(arr, level = 1, result = []) {
        result.push(level);
        arr.forEach(element => 
            Array.isArray(element) ? this.calculateDepth(element, level + 1, result) : null);

        return Math.max(...result);
    }
};
