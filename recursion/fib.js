function fib(num) {
  function helper(prev, curr, idx) {
    if (idx === num || num === 1) return curr;
    return helper(curr, prev + curr, idx + 1);
  }

  return helper(1, 1, 2);
}

fib(35); // 9227465
