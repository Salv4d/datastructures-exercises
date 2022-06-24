const numbers = [3, 9, 5, 1, 91, 0, -11, 3, 43, 6];

function selectionSort(arr) {
  let sortedArr = [...arr];
  let changesCount = 0;
  let minIdx;

  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    changesCount = 0;

    for (let j = i; j < arr.length; j++) {
      if (sortedArr[j] < sortedArr[minIdx]) {
        minIdx = j;
        changesCount++;
      }
    }

    [sortedArr[i], sortedArr[minIdx]] = [sortedArr[minIdx], sortedArr[i]];
  }

  return sortedArr;
}

selectionSort(numbers);
