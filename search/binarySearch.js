const importantNumbers = [0, 2, 3, 9, 13, 32, 42, 45, 60, 91];

function binarySearch(val, sortedArr) {
  let leftPointer = 0;
  let rightPoiner = sortedArr.length;
  let idx;

  while (leftPointer <= rightPoiner) {
    idx = Math.floor((leftPointer + rightPoiner) / 2);

    if (sortedArr[idx] === val) return idx;
    if (sortedArr[idx] > val) {
      rightPoiner = idx - 1;
    } else {
      leftPointer = idx + 1;
    }
  }
  return -1;
}

for (let i = 0; i < 100; i++) {
  console.log(i, binarySearch(i, importantNumbers));
}
