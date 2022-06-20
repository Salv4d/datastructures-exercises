function maxSubArraySum(arr, n) {
  if (n > arr.length) return null;

  let maxSum = arr.slice(0, n).reduce((p, c) => p + c);
  let currSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    currSum = currSum + arr[i] - arr[i - n];

    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubArraySum([2, 3], 3)); // null
