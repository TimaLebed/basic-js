module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    const transformed = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                transformed.pop();
                break;    
            case '--double-next':
                i + 1 !== arr.length ? transformed.push(arr[i + 1]) : null;
                break;
            case '--double-prev':
                i - 1 > 0 ? transformed.push(arr[i - 1]) : null;
                break;
            default:
                transformed.push(arr[i]);
                break;
        }
    }

    return transformed;
};
