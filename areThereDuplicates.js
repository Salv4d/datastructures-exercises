function areThereDuplicates(...args) {
  const itemQty = {}

  [...new Set(args)].reduce((obj, item) => ({...obj, [item]: 0}), {})

  for (let item of args) {
    if (itemQty[item]) {
      itemQty[item]++
    } else {
      itemQty[item] = 1
    }
  }

  return Math.max(...Object.values(itemQty)) > 1
}
  
console.log(areThereDuplicates('b', 'c', 'a', 3, 4, 1, 2, 4, 5, 6, 1, 2, 3))