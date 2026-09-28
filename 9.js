function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        let key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = fn(...args);

        cache.set(key, result);

        return result;
    };
}

function factorial(n) {
    if (n == 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

let memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));