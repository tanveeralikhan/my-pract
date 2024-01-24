function fibonacci(n, cache = {}) {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  cache[n] = result;

  return result;
}

console.log(fibonacci(6));
