function collectOddValues(arr) {
  if (arr.length === 0) return [];
  return arr[0] % 2 === 0
    ? [...collectOddValues(arr.slice(1))]
    : [arr[0], ...collectOddValues(arr.slice(1))];
}

collectOddValues([0, 1, 2, 3, 5, 6, 9, 8, 7, 3]);
