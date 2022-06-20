function minSubArrayLen(arr, n) {
  if (arr.reduce((p, c) => p + c, 0) < n) return 0;

  let currMin = 0;
  let currSum = 0;
  let min = Infinity;
  let i = 0;

  while (i < arr.length) {
    currSum += arr[i];
    currMin += 1;

    if (currSum >= n && currMin <= min) {
      min = currMin;
      i -= currMin - 1;

      currSum = 0;
      currMin = 0;
    }

    i++;
  }

  return min;

  // [1, 4, 16, 22, 5, 7, 8, 9, 10], 39
  // sum until get value >= target
  // try to found subarray with sum >= target
  // repeat
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
