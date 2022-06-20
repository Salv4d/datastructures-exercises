function isSubsequence(str1, str2) {
  let firstStr = str1.toLowerCase()
  let secondStr = str2.toLowerCase()
  let idx = 0;

  return firstStr.split('').every((l) => {
    idx = secondStr.slice(idx).indexOf(l)

    return idx >= 0
  })
}

console.log(isSubsequence('abc', 'acb'));