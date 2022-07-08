function merge(arr1, arr2) {
  let result = []

  function helper(arr1, arr2) {
    if ((arr1.length === 0 || arr2.length === 0)) return result.push(...arr1, ...arr2)
  
    if (arr1[0] < arr2[0]) { 
      result.push(arr1[0])

      helper(arr1.slice(1), arr2)
    } else {
      result.push(arr2[0])

      helper(arr1, arr2.slice(1))
    }

  }

  helper(arr1, arr2)

  return result
}

console.log(mergeArray([1, 10, 50], [2, 14, 99, 100, 300]));